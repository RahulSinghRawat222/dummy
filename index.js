window.addEventListener("wheel",function(dest){
    if(dest.deltaY>0){
        gsap.to('.workedOn_arrow svg',{
            rotate:180,
        })
    }else{
        gsap.to('.workedOn_arrow svg',{
            rotate:0,
        })
    }
})