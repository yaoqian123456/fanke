class Amplify{
    constructor(ele){
        this.ele = ele;
        
        this.conts = ele.querySelector('.cont');
        this.pics = ele.querySelectorAll('.pic li');
        this.masks = ele.querySelector('.mask');
        this.bpics = ele.querySelector('.bpic ');
      
        this.spic = ele.querySelectorAll('.spic li');

    }

    int(){
        this.overout()
        this.move()
        // this.toggle()
    }
    


    overout(){
        this.conts.addEventListener('mouseover', ()=>{
            this.masks.style.display = 'block';
            this.bpics.style.display = 'block';
        })
        this.conts.addEventListener('mouseout',()=>{
            this.masks.style.display = 'none';
            this.bpics.style.display = 'none';
        })
    }


    move(){
       
        this.conts.addEventListener('mousemove' , (e)=>{
         
            
            let x = e.pageX - this.ele.offsetLeft - this.ele.clientLeft - this.masks.clientWidth/2 ;
            let y = e.pageY - this.ele.offsetTop - this.ele.clientTop - this.masks.clientHeight/2 ;

           
            if(x < 0){
                x = 0;
            }

            if(y < 0 ){
                y = 0;
            }

            if(x > this.conts.clientWidth - this.masks.clientWidth){
                x = this.conts.clientWidth - this.masks.clientWidth;
            }

            if(y > this.conts.clientHeight - this.masks.clientHeight){
                y = this.conts.clientHeight - this.masks.clientHeight;
            }

        
            this.masks.style.left = x + 'px';
            this.masks.style.top = y + 'px';
          
            let bx = 800*x/400 ;
            let by = 800*y/400 ;

           
            this.bpics.style.backgroundPosition = ` -${bx}px  -${by}px `;

          
        })
    }

    // toggle(){
    //     this.spic.forEach((item,key)=>{
    //         item.addEventListener('click' , ()=>{
             
    //             this.spic.forEach((i,k)=>{
    //                 i.className = '';
    //                 this.pics[k].className = '';
    //             })
    //             item.className = 'active';
    //             this.pics[key].className = 'active';
              

    //             this.bpics.style.background = `url('./images/${this.arry[key]['big']}') no-repeat 0 0`;
    //             this.bpics.style.backgroundSize = '800px';
    //         })
    //     })
    // }




 
}