
const decode = function(x){
    switch (x) {
        case "SQ": return "шквал";
        case "PO": return "пыльный вихрь";
        case "FC": return "торнадо";
        case "BR": return "дымка (видимость от 1 до 9 км)";
        case "HZ": return "мгла (видимость менее 10 км)";
        case "FU": return "дым (видимость менее 10 км)";
        case "DS": return "пыльная буря (видимость менее 10 км)";
        case "SS": return "песчаная буря (видимость менее 10 км)";
        default : return "Command is incorrect";
    }
}
