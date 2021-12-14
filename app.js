let data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

let current = 0;
let dataNum = 0;

const timeFrameBtn = document.querySelectorAll('.btn');
const divBio = document.querySelector('#bio');
const activity = document.querySelectorAll('.activity');
const currentTime = document.querySelectorAll('.currentTime');
const previousTime = document.querySelectorAll('.previousTime');


timeFrameBtn.forEach(function(btn){
  btn.addEventListener('click',function(e){
    let target = e.currentTarget;
    // add/remove active class to clicked -daily/weeky/monthly-timeFrame
    timeFrameBtn.forEach(function(item){
      if (item !== target){
        item.classList.remove('active')
      } else {
        item.classList.add('active')
      }
    })  
    // determine which button is clicked and display information 
    displayData(target.textContent);
  });
});




function displayData(period) {
  let item = data[0];

  switch (period) {
    // for daily timeFrame
    case 'Daily': 
      activity[0].textContent = item.title;
      currentTime[0].textContent = `${item.timeframes.daily.current}hrs`;
      previousTime[0].textContent = `Yesterday - ${item.timeframes.daily.previous}hrs`;
      
      item = data[1];
      for (current; activity < activity.length ;current++){

      }
      activity[1].textContent = item.title;
      currentTime[1].textContent = `${item.timeframes.daily.current}hrs`;
      previousTime[1].textContent = `Yesterday - ${item.timeframes.daily.previous}hrs`;
    
      item = data[2];
      activity[2].textContent = item.title;
      currentTime[2].textContent = `${item.timeframes.daily.current}hrs`;
      previousTime[2].textContent = `Yesterday - ${item.timeframes.daily.previous}hrs`;
    
      item = data[3];
      activity[3].textContent = item.title;
      currentTime[3].textContent = `${item.timeframes.daily.current}hrs`;
      previousTime[3].textContent = `Yesterday - ${item.timeframes.daily.previous}hrs`;
    
      item = data[4];
      activity[4].textContent = item.title;
      currentTime[4].textContent = `${item.timeframes.daily.current}hrs`;
      previousTime[4].textContent = `Yesterday - ${item.timeframes.daily.previous}hrs`;
    
      item = data[5];
      activity[5].textContent = item.title;
      currentTime[5].textContent = `${item.timeframes.daily.current}hrs`;
      previousTime[5].textContent = `Yesterday - ${item.timeframes.daily.previous}hrs`;
    break;

    // for weekly timeFrame
    case 'Weekly':
      item = data[0];
      activity[0].textContent = item.title;
      currentTime[0].textContent = `${item.timeframes.weekly.current}hrs`;
      previousTime[0].textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;

      item = data[1];
      activity[1].textContent = item.title;
      currentTime[1].textContent = `${item.timeframes.weekly.current}hrs`;
      previousTime[1].textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;

      item = data[2];
      activity[2].textContent = item.title;
      currentTime[2].textContent = `${item.timeframes.weekly.current}hrs`;
      previousTime[2].textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;

      item = data[3];
      activity[3].textContent = item.title;
      currentTime[3].textContent = `${item.timeframes.weekly.current}hrs`;
      previousTime[3].textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;

      item = data[4];
      activity[4].textContent = item.title;
      currentTime[4].textContent = `${item.timeframes.weekly.current}hrs`;
      previousTime[4].textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;

      item = data[5];
      activity[5].textContent = item.title;
      currentTime[5].textContent = `${item.timeframes.weekly.current}hrs`;
      previousTime[5].textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;
    break;

    // for monthly timeFrame
    case 'Monthly':
      item = data[0];
      activity[0].textContent = item.title;
      currentTime[0].textContent = `${item.timeframes.monthly.current}hrs`;
      previousTime[0].textContent = `Last Month - ${item.timeframes.monthly.previous}hrs`;

      item = data[1];
      activity[1].textContent = item.title;
      currentTime[1].textContent = `${item.timeframes.monthly.current}hrs`;
      previousTime[1].textContent = `Last Month - ${item.timeframes.monthly.previous}hrs`;

      item = data[2];
      activity[2].textContent = item.title;
      currentTime[2].textContent = `${item.timeframes.monthly.current}hrs`;
      previousTime[2].textContent = `Last Month - ${item.timeframes.monthly.previous}hrs`;

      item = data[3];
      activity[3].textContent = item.title;
      currentTime[3].textContent = `${item.timeframes.monthly.current}hrs`;
      previousTime[3].textContent = `Last Month - ${item.timeframes.monthly.previous}hrs`;

      item = data[4];
      activity[4].textContent = item.title;
      currentTime[4].textContent = `${item.timeframes.monthly.current}hrs`;
      previousTime[4].textContent = `Last Month - ${item.timeframes.monthly.previous}hrs`;

      item = data[5];
      activity[5].textContent = item.title;
      currentTime[5].textContent = `${item.timeframes.monthly.current}hrs`;
      previousTime[5].textContent = `Last Month - ${item.timeframes.monthly.previous}hrs`;
    break;
  }
}

