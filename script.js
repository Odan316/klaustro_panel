/**
 * Created by onag on 22.11.14.
 */
$(function(){
    var timer = setInterval(updateAll, 6000);
});

function updateAll(){
    $.ajax({
        url: "/api.php",
        type: "POST",
        async: false,
        dataType: "json",
        success: function(data){
            updateFields(data);
        }
    });
}

function updateFields(data){
    for(var key in data){
        if(!data.hasOwnProperty(key)) continue;
        var element = $("#"+data[key].name);
        var value = data[key].value;
        var type = data[key].type;
        switch(type){
            case "string":
                element.text(value);
                break;
            case "door":
                if(value){
                    element.removeClass("door_closed").addClass("door_open");
                } else {
                    element.removeClass("door_open").addClass("door_closed");
                }
                break;
            case "diode":
                if(value){
                    element.removeClass("diode_red").addClass("diode_green");
                } else {
                    element.removeClass("diode_green").addClass("diode_red");
                }
                break;
            case "figures":
                for(var key2 in value){
                    if(!value.hasOwnProperty(key2)) continue;
                    if(value[key2] == 1){
                        element.find("#fig_"+key2).show();
                    } else {
                        element.find("#fig_"+key2).hide();
                    }
                }
                break;
            case "button":
                if(value){
                    element.removeClass("not_pushed").addClass("pushed");
                } else {
                    element.removeClass("pushed").addClass("not_pushed");
                }
                break;
            case "dates":
                for(var key2 in value){
                    if(!value.hasOwnProperty(key2)) continue;
                    element.find(".row"+key2).text(value[key2]);
                }
                break;
            case "display":
                break;
            case "battery":
                var b_width = element.width() - 4;
                var i_width = Math.round(b_width*value);
                element.find(".battery_indicator").css({'width' : i_width+"px"});
                break;
            case "key":
                if(value){
                    element.find("img").show();
                } else {
                    element.find("img").hide();
                }
                break;
            default:
                break;
        }
    }
}