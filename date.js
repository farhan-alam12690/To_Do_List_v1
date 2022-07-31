
exports.getDate = function() {
    let today = new Date();
    let currentDay = today.getDay();
    let day = "";
    
    let options = { 
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    
    return today.toLocaleDateString('en-UK', options);   
}

exports.getDay = function() {
    let today = new Date();
    let currentDay = today.getDay();
    let day = "";
    
    let options = { 
        weekday: 'long',
    };
    
    return today.toLocaleDateString('en-UK', options);   
}

