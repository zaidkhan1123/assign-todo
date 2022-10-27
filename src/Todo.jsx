import React,{useState} from 'react'
import image from "./img.png"
function Todo() {

    const [input, setInput] = useState('');
    const [item, setItem] = useState([]);
    const [buttonDisabled, setButtondisabled] = useState(false);





function AddItems(){
    setItem((item)=>{
      const newitem = [...item,input]
      setInput("");
      return  newitem;
       
    })
     
}
   
function itemDelet (i){
  const updatedlist = item.filter((elem,id)=>{
    return i!=id
    
  })
  setItem(updatedlist)
}

function REmoveAll(){
  setItem([])
}
   

  return (

    <div className="container">
      
        <div className="row ">
            <div className="col-md-12  text-center mt-5">
                <h1 className='text fw-bold text-center mt-5'>Todo list</h1>
                <input  type="text" placeholder='Add items'value={input} minLength={1} required onChange={(e)=>{setInput(e.target.value)}} /> 
                <button className='btn' onClick={AddItems} >Add</button>
                </div>
        </div>
         {item !=[] && item.map((data,i)=>{
          return (
            <div className="row" >
            <div className="col-md-12  text-center">
            <h3 className='span text-white' key={i}>{data}
             <i class="fa-sharp fa-solid fa-trash " onClick={()=>itemDelet(i)} ></i> 
              </h3>
            
            </div>
        </div>
        
          );
         })}
         {item.length >= 1 ?   <div className="row">
          <div className="col-md-12 text-center mt-5 me-3"><button onClick={REmoveAll} className='new-btn'>Remove All</button></div>
         
         </div> : ""
           }

          {item.length >=1 ? "" : <div className="row">
            <div className="col-md-12 text-center mt-5">
            <img  alt="" src={image}/>
            </div>   

        </div>}    
       
    </div>
  )
  }

export default Todo






