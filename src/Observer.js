/*
    大盒子：装所有的事件
    eventList:{
        handle:[fn1,fn2]
    }
       
    
    on(事件名称,回调函数)
    1、判断事件名称是否存在，如果存在直接将这个函数添加到数组中去
    2、当不存在的时候 创建一个数组 让后将函数添加到数组中去


    emit(事件名称,需要传递的参数)

    1、判断事件名称是否存在 如果不存在则不做触发
    2、如果存在,遍历数组将数组中的函数统一进行触发  然后将需要传递的参数传递给所有的函数


    off(事件名称,需要解绑的函数)

    1、判断事件名称是否存在 如果不存在则不作处理
    2、如果存在 判断第二个参数是否存在  如果存在则将这个函数从数组中移除  如果不存在将 整个数组清空

*/

let EventList = {

}

const $on = (eventName,callback)=>{

    if(!EventList[eventName]){
        EventList[eventName] = [];
    }

    EventList[eventName].push(callback);
}

const $emit = (eventName,params)=>{
    if(EventList[eventName]){
        EventList[eventName].forEach((cb)=>{
            cb(params);
        })
    }
}


const $off = (eventName,callback)=>{
    if(EventList[eventName]){
        if(callback){
            var index = EventList[eventName].indexOf(callback);
            EventList[eventName].splice(index,1);
        }else{
            EventList[eventName].length = 0;
        }
    }
}

export default {
    $on,
    $emit,
    $off
}

// function fn1(val){
//     console.log(1111,val);
// }

// function fn2(val){
//     console.log(222,val);
// }

// function fn3(val){
//     console.log(333,val);
// }

// $on("handle",fn1)
// $on("handle",fn2)
// $on("handle",fn3)
// $off("handle")
// $emit("handle")