var editor, data, itemId;

function InitializeCkeEditor(elementName)
{
    debugger;
    if ($('[id$=' + elementName + ']').length > 0) {
        console.log("initCk")
         var EditorID = $('[id$=' + elementName + ']')[0].id;
       editor = CKEDITOR.replace(EditorID, {
            extraAllowedContent: 'img [  alt, !src ] { width, height, float, border, border-width, border-style, border-color, padding, margin } ',
            htmlEncodeOutput: true,
        
        });

        editor.on('change', function(evt){
            data = evt.editor.getData();
           // console.log(data);
            
            })
        
        var value = $('[id$=' + elementName + ']').val().replace(/\&lt;/g, "<").replace(/\&gt;/g, ">");
        CKEDITOR.instances[EditorID].setData(value);
    }
}


function EncodeCkeditorValue(elementName)
{
    if ($('[id$=' + elementName + ']').length > 0) {
        var EditorID = $('[id$=' + elementName + ']')[0].id;
        var value = CKEDITOR.instances[EditorID].getData();
        value = value.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
        CKEDITOR.instances[EditorID].setData(value);
    }
}
function handleEdit(id){
    //console.log(id);
   itemId = id;
   $.ajax({
    url:`http://172.17.8.31/misti/api/StaticPage/${id}`,
    type: "GET",
    success: function (result) {
        console.log(result);
        document.getElementById("sp_title").value = result.title;
        document.getElementById("sp_type").value = result.type;
        document.getElementById("sp_group").value = result.groupType;
        if(result.video.includes("mp4")){
        document.getElementById("sp_vidprev").setAttribute("src", 'http://172.17.8.31/misti'+result.video)
        }
        editor.setData(result.body)
    },
   })
    
}
 function saveData(){
    debugger;
   // check if its existing item(put) or new(post)
   const title = document.getElementById("sp_title").value;
   const type = parseInt(document.getElementById("sp_type").value);
   const group = parseInt(document.getElementById("sp_group").value);
   const video = $('[id$=sp_video]').get(0);

   const vidFile = video.files[0];
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user.token)
    debugger;
    var Form_data = new FormData();
    Form_data.append("Type",type);
    Form_data.append("Title",title); 
    Form_data.append("Video",vidFile);  Form_data.append("Body",data);Form_data.append("GroupType", group)
  if(itemId != null){
    Form_data.append("Id",itemId)
    $.ajax({
        url: `http://172.17.8.31/misti/api/StaticPage/${itemId}`,
        type: "PUT",
        processData: false,
        contentType:false,
        data: Form_data,
        headers: {
            authorization: 'Bearer '+ user.token
          }, 

        success: function (result) {
            console.log(result)
        },
        failure: function (ex) {
            //  alert(JSON.stringify(ex));
            //  console.log("Fail" + JSON.stringify(ex))
            console.log("exception"+ex)
        },
        error: function (ex) {
            ///alert(JSON.stringify(ex));
            // console.log("Err " + JSON.stringify(ex))
            console.log('error'+JSON.stringify(ex))
        }

    });
  }else{
    $.ajax({
        url: "http://172.17.8.31/misti/api/StaticPage",
        type: "POST",
        processData: false,
        contentType:false,
        data: Form_data,
        headers: {
            authorization: 'Bearer '+ user.token
          }, 

        success: function (result) {
            console.log(result)
        },
        failure: function (ex) {
            //  alert(JSON.stringify(ex));
            //  console.log("Fail" + JSON.stringify(ex))
            console.log("exception"+ex)
        },
        error: function (ex) {
            ///alert(JSON.stringify(ex));
            // console.log("Err " + JSON.stringify(ex))
            console.log('error'+JSON.stringify(ex))
        }

    });
  }
}