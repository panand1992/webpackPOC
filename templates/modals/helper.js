//var Handlebars = require('handlebars');

var ifCond = function (v1, operator, v2, options) {
    
     
    // Initially if condition was like this: 
      if(v1 === undefined || v2 === undefined) { 
    // if(!v1 || !v2 ) {
      return options.inverse(this);
    }
    switch (operator) {
      case '==':
          return (v1 == v2) ? options.fn(this) : options.inverse(this);
      case '===':
          return (v1 === v2) ? options.fn(this) : options.inverse(this);
      case '!==':
          return (v1 !== v2) ? options.fn(this) : options.inverse(this);
      case '!=':
          return (v1 != v2) ? options.fn(this) : options.inverse(this);
      case '<':
          return (v1 < v2) ? options.fn(this) : options.inverse(this);
      case '<=':
          return (v1 <= v2) ? options.fn(this) : options.inverse(this);
      case '>':
          return (v1 > v2) ? options.fn(this) : options.inverse(this);
      case '>=':
          return (v1 >= v2) ? options.fn(this) : options.inverse(this);
      case '&&':
          return (v1 && v2) ? options.fn(this) : options.inverse(this);
      case '||':
          return (v1 || v2) ? options.fn(this) : options.inverse(this);
      default:
          return options.inverse(this);
    }
  };
  var cityIfCond = function(city, value, options) {
    //value here is a comma seperated list. this will allow us OR condition for if.
    value = value.split(',')
    return (value.indexOf(city) > -1) ? options.fn(this) : options.inverse(this);
  }
  var shorten = function (str, len) {
      if(!str) {
        return;
      }
      return str.substring(0,len);
  };

  var getIndexValue = function(array, index) {
      return array[index].imagesMap.medium;
  };

  var getAmenityProp = function (amenType,amenProp) {
    var amenitiesMap = [{
        key: 'LIFT',
        name: 'Lift',
        icon:'lift'
      },{
        key: 'GYM',
        name: 'Gym',
        icon: 'gym'
      },{
        key: 'INTERNET',
        name: 'Internet',
        icon: 'internet'
      },{
        key: 'AC',
        name:'AC',
        detailText: 'AC',
        detailTextFalse : 'No AC',
        icon: 'icon-ac'
      },{
        key: 'CLUB',
        name: 'Club', 
        icon:'club'
      },{
        key: 'INTERCOM',
        name: 'Intercom', 
        icon: 'intercom'
      },{
        key: 'POOL',
        name: 'Pool',
        icon:'pool'
      },{
        key: 'CPA',
        name: 'Playground',
        icon: 'playarea'
      },{
        key: 'FS',
        name: 'Fire Safety',
        icon: 'fire-safety'
      },{
        key: 'SERVANT',
        name: 'Servant Room', 
        icon: 'servant'
      },{
        key: 'SECURITY',
        name: 'Security', 
        icon: 'security'
      },{
        key: 'SC',
        name: 'Shopping',
        icon: 'shopping'
      },{
        key: 'GP',
        name: 'Gas',
        icon: 'gas-pipe'
      },{
        key: 'PARK',
        name: 'Park', 
        icon:'park'
      },{
        key: 'RWH',
        name: 'Rain Water Harvesting',
        icon: 'rwh'
      },{
        key: 'STP',
        name: 'Sewage',
        icon: 'stp'
      },{
        key: 'HK',
        name: 'House Keeping',
        icon: 'house-keeping'
      },{
        key: 'PB',
        name: 'Power Backup',
        icon: 'power-backup'
      },{
        key: 'VP',
        name: 'Visitor Parking',
        icon: 'vp'
      },
      {
        key:'SMOKING',
        name: 'No Smoking',
        detailText: 'Smoking',
        detailTextFalse : 'No Smoking',
        icon: 'icon-smoking'
      },
      {
        key:'GUARDIAN',
        name: 'No Guardian Entry',
        detailText: 'Guardian Entry',
        detailTextFalse : 'No Guardian Entry',
        icon: 'icon-guardian'
      },
      {
        key:'DRINKING',
        name: 'No Drinking',
        detailText: 'Drinking',
        detailTextFalse : 'No Drinking ',
        icon: 'icon-drinking'
      },
      {
        key:'GE',
        name: 'No Girls Entry',
        detailText: 'Girls Entry',
        detailTextFalse : 'No Girls Entry ',
        icon: 'girls-icon-entry'
      },
      {
        key:'BE',
        name: 'No Boys Entry',
        detailText: 'Boys Entry',
        detailTextFalse : 'No Boys Entry',
        icon: 'boys-icon-entry'
      },
      {
        key:'NONVEG',
        name: 'No Non Veg',
        detailText: 'Non-Veg Food',
        detailTextFalse : 'Non-Veg Food',
        icon: 'non-icon-veg'
      },
      {
        key: 'TV',
        name: 'TV',
        detailText: 'TV Available',
        detailTextFalse : 'No TV Available',
        icon: 'icon-tv'
      },
      {
        key: 'CUPBOARD',
        name: 'Cupboard',
        detailText: 'Cupboards Available',
        detailTextFalse : 'No Cupboards',
        icon: 'icon-cupboard'
      },
      {
        key: 'AB',
        name: 'Attached Bathroom',
        detailText: 'Attached Bathroom',
        detailTextFalse : 'No Attached Bathroom',
        icon: 'icon-at'
      },
      //remove 'AT' duplicates are removed from backend
      {
        key: 'AT',
        name: 'Attached Bathroom',
        detailText: 'Attached Bathroom',
        detailTextFalse : 'No Attached Bathroom',
        icon: 'icon-at'
      },
      {
        key: 'BEDDING',
        name: 'Bedding',
        detailText: 'Bedding Available',
        detailTextFalse : 'No Bedding Available',
        icon: 'icon-bedding'
      },
      {
        key: 'GEASER',
        name: 'Geyser',
        detailText: 'Geyser',
        detailTextFalse : 'No Geyser',
        icon: 'icon-geaser'
      },
      {
        key: 'COMMANTV',
        name: 'Common TV',
        icon: 'icon-tv'
      },
      {
        key: 'COMMON_TV',
        name: 'Common TV',
        icon: 'icon-tv'
      },
      {
        key: 'REFRIGATOR',
        name: 'Refrigerator',
        icon: 'icon-refrigerator'
      },
      {
        key: 'REFRIGERATOR',
        name: 'Refrigerator',
        icon: 'icon-refrigerator'
      },
      {
        key: 'MESS',
        name: 'Mess',
        icon: 'icon-mess'
      },
      {
        key: 'COOKING',
        name: 'Cooking Allowed',
        icon: 'icon-cooking'
      },
      {
        key: 'POWERBACKUP',
        name: 'Power Backup',
        icon: 'power-backup'
      },
       {
        key: 'POWER_BACKUP',
        name: 'Power Backup',
        icon: 'power-backup'
      },
      {
        key: 'WARDEN',
        name: 'Warden',
        icon: 'icon-warden'
      },
      {
        key: 'ROOM_CLEANING',
        name: 'Room Cleaning',
        icon: 'icon-cleaning'
      },
      {
        key: 'LAUNDRY',
        name: 'Laundry',
        icon: 'icon-laundry'
      },
      {
        key: 'WIFI',
        name: 'Internet',
        icon: 'internet'
      }];

      var amenityObj = _.findWhere(amenitiesMap,{key: amenType});

      if(amenityObj) {
        return amenityObj[amenProp] || '';
      }

      return '';
  };

  var renderPartial = function(partial, data) {
    return templates[partial](data);
  };

  var getPhotoPath = function (imgPath) {
    if(!imgPath){
      return;
    }
    return '/images/' + imgPath.split('_')[0] + '/' + imgPath;
  };

  var dateFormater = function (date, isMobile, joinBy) {
      
      var d = new Date(date);
      
      var dd = d.getDate();
      
      if(dd <= 9) {
        dd = '0'+dd;
      }

      var mm = d.getMonth() + 1;

      if(mm <= 9){
        mm = '0'+mm;
      }

      var yyyy = d.getFullYear();

      if(isMobile) {
        
        var todayDate = new Date();

        todayDate = todayDate.getTime();

        if( date < todayDate) {
          return 'Immediately';
        }
        else{
          return dd+'/'+mm+'/'+yyyy;  
        }

      } else if(joinBy){
        return yyyy+'-'+mm+'-'+dd;
      } else {
        return dd+'/'+mm+'/'+yyyy;
      }

  };
  var formatAMPM = function (timeStr) {
    var date, hours,
        minutes, ampm, timeArr, strTime;

    if(timeStr){
      timeArr = timeStr.split(':');
      hours = parseInt(timeArr[0], 10);
      minutes = parseInt(timeArr[1].split(' ')[0], 10);
      ampm = timeArr[1].split(' ')[1];
    }
    else{
      return;
    }
    //convert from 22:45 format to 10:45 PM
    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    strTime = hours + ':' + minutes + ' ' + ampm;

    return strTime;
  };
  var createdOnText = function (date) {
      
      var d = new Date(date);
      
      var todayDate = new Date();
      var dayDiff=Math.round((todayDate-d)/(1000*60*60*24)) ;
      var text='';
      if(dayDiff==0){
        text='today';
      }
      else if(dayDiff==1){
        text='yesterday';
      }
      else if(dayDiff >1 && dayDiff<30){
         text=dayDiff + ' days ago';
      }
      else if(dayDiff >=30 && dayDiff < 365){
          var monthDiff=Math.round((todayDate.getFullYear()*12+todayDate.getMonth())-(d.getFullYear()*12+d.getMonth()));
          if(monthDiff==1){
            text='1 month ago';
          }
          else if(monthDiff>1&& monthDiff<12){
            text=monthDiff + ' months ago';
          }
          if (monthDiff >= 12){
            var yearDiff=Math.round(todayDate.getFullYear()-d.getFullYear());
            if(yearDiff==1){
              text='1 year ago'
            }
            else{
            text=yearDiff + ' years ago';
            }
          }
      } 
      return text;
  };

  var furnishText = function (furnishType, type) {

    var furnishMap = {
      'SEMI_FURNISHED': 'Semi Furnished',
      'FULLY_FURNISHED': 'Fully Furnished',
      'NOT_FURNISHED': 'Unfurnished'
    };

    var returnVal = furnishMap[furnishType] || 'NA';

    if(type && type == 'min'){
      returnVal = returnVal.substring(0,5) + '..';
    }

    return returnVal;
  };

  var furnishText_2 = function (furnishType, type) {

    var furnishMap = {
      'SEMI_FURNISHED': 'Semi Furnished',
      'FULLY_FURNISHED': 'Fully Furnished',
      'NOT_FURNISHED': 'Unfurnished'
    };

    var returnVal = furnishMap[furnishType] || '';

    if(type && type == 'min'){
      returnVal = returnVal.substring(0,5) + '..';
    }

    return returnVal;
  };

  var parkingText = function (parkingType){
    var parkingMap = {
      'TWO_WHEELER' : 'Bike Parking',
      'FOUR_WHEELER' : 'Car Parking',
      'NONE' : 'No Parking',
      'BOTH' : 'Bike & Car Parking',
    }
    return parkingMap[parkingType] || 'NA';
  };
  var preferredText = function (preferredType){
    var preferredMap = {
      'FAMILY' : 'Family',
      'BACHELOR' : 'Bachelors',
      'COMPANY' : 'Company',
      'ANYONE' : 'Anyone'
    }
    return preferredMap[preferredType] || '';
  };
  var ageText = function (age){

    var text=age +" years old";
    if (age===0)
    {
      text="less than an year old"
    }
    return text || '';
  };
  var everyNth = function(context, every, options) {
    var fn = options.fn, inverse = options.inverse;
    var ret = '';
    if(context && context.length > 0) {
      for(var i=0, j=context.length; i<j; i++) {
        var modZero = i % every === 0;
        ret = ret + fn(_.extend({}, context[i], {
          isModZero: modZero,
          isModZeroNotFirst: modZero && i > 0,
          isLast: i === context.length - 1,
          index: i,
          counter: (i+1),
          data: context[i]
        }));
      }
    } else {
      ret = inverse(this);
    }
    return ret;
  };
  var filterText =function(filterOptions){
    var text="";
    var typeText='';
    var rentText='';
    var furnishingText='';
    _.each(filterOptions,function(filter,filterKey){
      if(filterKey==="type" && filter){
        var options=filter.split(",")
        _.each(options,function(option){
          switch(option){
            case 'BHK1':
              typeText=typeText+"1 BHK "
              break;
            case 'BHK2':
              typeText=typeText+"2 BHK "
              break;
            case 'BHK3':
              typeText=typeText+"3 BHK "
              break;
            case 'BHK4':
              typeText=typeText+"4 BHK "
              break;
            case 'BHK4PLUS':
              typeText=typeText+"4+ BHK "
              break;
            case 'RK1':
              typeText=typeText+"1 RK "
              break;
            default:
              break;
          }
        });
      }
      if(filterKey==='rent'){
        if(filter!='0,2000000'){
          var upperLimit=filter.split(',')[1];
          rentText='rent upto '+ upperLimit
        }
      }
      if(filterKey==='furnishing'){
        furnishingText=furnishText_2(filter);
      }
    });
    if(typeText != "" && rentText != ""){
      return furnishingText+" "+typeText+','+rentText+' in ';
    }
    else if(rentText != ""){ 
      return rentText + ' in ';
    }
    else if(typeText!=""){
      return furnishingText+" "+typeText + ' in '
    }
    else{
      return text;
    }
  }
  
  var rupeeFormater = function(value) {
    if(value){
      var returnValue = value.toString();
      var lastThree = returnValue.substring(returnValue.length-3);
      var otherNumbers = returnValue.substring(0,returnValue.length-3);

      if(otherNumbers != '')
          lastThree = ',' + lastThree;
      returnValue = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
      return returnValue  
    }else{
      return value;
    }
  };

  var getInitials = function (value) {
    var returnValue = "";
    
    if(value) {
      var nameArr = value.split(/\s*[\s]\s*/);

      if(nameArr.length > 1){
        returnValue = nameArr[0].substring(0,1) + nameArr[1].substring(0,1);
      }else if(nameArr.length > 0){
        returnValue = nameArr[0].substring(0,2);
      }else{
        returnValue = value.substring(0,2);
      }
    }

    return returnValue;
  };

  var textEllipsis = function(text, length) {
    var returnValue = text;

    if(text && (text.length > length)) {
      returnValue = text.substring(0, length-3) + '...';
    }

    return returnValue;
  };

  var bedroomText= function(type){
    var bhkMap={
      "BHK1" : "1 Bedroom",
      "RK1" : "1 Bedroom",
      "BHK2" : "2 Bedrooms",
      "BHK3" : "3 Bedrooms",
      "BHK4" : "4 Bedrooms",
      "BHK4PLUS" : "4+ Bedrooms"
    };
    return bhkMap[type] || "NA";
  };

  var bathroomText= function(bathrooms){
    if(!bathrooms){
      return "0 Bathrooms"
    }
    else{
      if(bathrooms!=1){
        return bathrooms + " Bathrooms";
      }
      else{
        return "1 Bathroom";
      }
    }
  };
  var balconiesText= function(balconies){
    if(!balconies){
      return "0 Balconies"
    }
    else
    {
      if(balconies!=1){
        return balconies + " Balconies";
      }
      else{
        return "1 Balcony";
      }
    }
  };
  var checkNull=function(item){
    return item ||"NA";
  }
  
  var checkNullQuantity=function(item, text){
    if(item) {
      return item + text;
    } else {
      return "NA";
    }
  }

  var rentHandler = function(rent, deposit){
    if(rent<10){
      if(deposit) {
        return 'Only Deposit';
      } else {
        return "Only Deposit";
      }
    }
    else{
      return rupeeFormater(rent);
    }
  }

  var propTypeText= function(propType){
    var typeMap={
      "AH": "Apartment",
      "IH": "Independent House/Villa",
      "IF" : "Independent Floor/Builder Floor"
    };
    return typeMap[propType]||"NA";
  };

  var facingText= function(facing){
    var facingMap={
      "E" : "East",
      "N" : "North",
      "W" : "West",
      "S" : "South",
      "NE" : "North East",
      "NW" : "North West",
      "SE" : "South East",
      "SW" : "South West",
    };
    return facingMap[facing]||"NA";
  };

  var noPicsPhotoPath=function(type){
    if(!type){
      return;
    }
    var bhkMap={
      "BHK1" : "1bhk.jpg",
      "RK1" : "1bhk.jpg",
      "BHK2" : "2bhk.jpg",
      "BHK3" : "3bhk.jpg",
      "BHK4" : "4bhk.jpg",
      "BHK4PLUS" : "4bhk.jpg"
    };

    var imgUrl = '//images.nobroker.in/mobile/app/styles/images/emptyProperty/' + bhkMap[type];

    return imgUrl;
  }

  var formatEmi=function(emi){
    if(!emi) {
      return;
    }
    if(emi.indexOf('Lacs') >-1){
      emi=emi.replace('Lacs',"L");
    }
    return emi;
  }

  var waterText =function(waterSupply){
    var waterSupplyMap={
      CORPORATION : "Corporation",
      BOREWELL : "Borewell",
      CORP_BORE : "Both"
    }
    return waterSupplyMap[waterSupply] || "NA";
  }
  var flooringText =function(flooring){
    var flooringMap={
     CEMENT : "Cement",
     MOSAIC :"Mosaic",
     MARBLE_GRANITE :"Marble/Granite",
     WOODEN : "Wooden",
     VITRIFIED_TILES: "Vitrified Tiles"
    }
    return flooringMap[flooring] || "NA";
  }

  var lowerCase=function(str){
    return str.toLowerCase();
  }

  var diffOfNumbers  = function(num1 , num2){
    return (parseInt(num1) - parseInt(num2) + 1);
  }
  var roomTypeHandler = function(roomType){
    var roomTypeMap = {
      'SINGLE' : 'Single Room',
      'DOUBLE' : 'Double Sharing ',
      'THREE' : 'Three Sharing ',
      'FOUR' : 'Four Sharing '
    }
    return roomTypeMap[roomType] || 'NA';
  }
  var roomTypesSummaryHandler = function (roomTypes){
    var single,shared;
    _.each(roomTypes,function(type){
        if(type.occupancy === 'SINGLE'){
          single=true;
        }else{
          shared=true;
        }
    });
    if(single && shared){
      return 'Single and Shared';
    }else if(shared){
      return "Shared";
    }else if(single){
      return "Single";
    }else{
      return "NA";
    }
  } 

  Handlebars.registerHelper('cityIfCond', cityIfCond);
  Handlebars.registerHelper('everyNth', everyNth);
  Handlebars.registerHelper('ifCond', ifCond);
  Handlebars.registerHelper('Shorten', shorten);
  Handlebars.registerHelper('getIndexValue', getIndexValue);
  Handlebars.registerHelper('getAmenityProp',getAmenityProp);
  Handlebars.registerHelper('renderPartial',renderPartial);
  Handlebars.registerHelper('getPhotoPath',getPhotoPath);
  Handlebars.registerHelper('FormatDate', dateFormater);
  Handlebars.registerHelper('FormatAMPM', formatAMPM);
  Handlebars.registerHelper('furnishText',furnishText);
  Handlebars.registerHelper('rupeeFormater', rupeeFormater);  
  Handlebars.registerHelper('parkingText', parkingText);
  Handlebars.registerHelper('preferredText', preferredText);
  Handlebars.registerHelper('filterText', filterText);
  Handlebars.registerHelper('ageText', ageText);
  Handlebars.registerHelper('bedroomText', bedroomText);
  Handlebars.registerHelper('bathroomText', bathroomText);
  Handlebars.registerHelper('balconiesText', balconiesText);
  Handlebars.registerHelper('propTypeText', propTypeText);
  Handlebars.registerHelper('facingText', facingText);
  Handlebars.registerHelper('FormatEmi', formatEmi);
  Handlebars.registerHelper('rentHandler', rentHandler);
  Handlebars.registerHelper('waterSupplyText', waterText);
  Handlebars.registerHelper('flooringText', flooringText);
  Handlebars.registerHelper('checkNull',checkNull);
  Handlebars.registerHelper('checkNullQuantity',checkNullQuantity);
  Handlebars.registerHelper('noPicsPhotoPath', noPicsPhotoPath);
  Handlebars.registerHelper('createdOnText', createdOnText);
  Handlebars.registerHelper('getInitials',getInitials);
  Handlebars.registerHelper('lowerCase',lowerCase);
  Handlebars.registerHelper('roomTypeHandler',roomTypeHandler);
  Handlebars.registerHelper('roomTypesSummaryHandler',roomTypesSummaryHandler);
  Handlebars.registerHelper('textEllipsis',textEllipsis);
  Handlebars.registerHelper('diffOfNumbers',diffOfNumbers);

