
const decode = function(x){
    switch (x) {
        case "SQ": return "squall";
        case "PO": return "dust swirl";
        case "FC": return "tornado";
        case "BR": return "fog (visibility from 1 to 9 km)";
        case "HZ": return "haze (visibility less than 10 km)";
        case "FU": return "smoke (visibility less than 10 km)";
        case "DS": return "dust storm (visibility less than 10 km)";
        case "SS": return "sandstorm (visibility less than 10 km)";
        default : return "Command is incorrect";
    }
}
