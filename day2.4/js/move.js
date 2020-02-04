function startMove(obj, json, fn) {
  
    obj.timer = setInterval(function () {
      let bStop = true;//
      for (let attr in json) {
        let cur = 0;
        if (attr === 'opacity') {
          cur = Math.round(parseFloat(getComputedStyle(obj, false)[attr]) * 100);//opacity 0.3 -->30
        } else {
          cur = parseInt(getComputedStyle(obj, false)[attr]);
        }
  
        //声明speed 控制速度
        let speed = (json[attr] - cur) / 6;//变速运动
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  
        console.log(cur, json[attr]);
        if (cur !== json[attr]) bStop = false;
  
  
        //100 30
        if (attr === 'opacity') {
          obj.style.opacity = (cur + speed) / 100;
        }
        obj.style[attr] = cur + speed + "px";
      }
  
      if (bStop) {
        clearInterval(obj.timer);
        fn && fn();
      }
    }, 30);
  }
  