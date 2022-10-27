import React,{useState} from 'react'
import image from "./img.png"
import dark from "./dark-mode.png"
function Todo() {

    const [input, setInput] = useState('');
    const [item, setItem] = useState([]);
    const [darkmood, setDarkmood] = useState({
      color : "white",
      backgroundColor : "black"
     });
     const [btntext, setbtntext] = useState('Enable Light Mode');


function DarkmoodG(){
if(darkmood.color == "white"){
  setDarkmood({
      color : "black",
      backgroundColor : "white"})
      setbtntext('Enable Dark Mode')
}
  

else{
  setDarkmood({
    color : "white",
    backgroundColor : "black"
  })
  setbtntext("Enable Light Mode")
}



}
  

function AddItems(){
    setItem((item)=>{
      const newitem = [input,...item]
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

    <div className="container-fluid" style={darkmood}>
      <div className="row">
        <div className="col mt-4">
      <div className="form-check form-switch ">
  <input 
  onClick={DarkmoodG}
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="flexSwitchCheckDefault"
  />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
    <img className='darkimage' src={dark} alt="" /> {btntext}
  </label>
</div>
</div>
</div>
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
             <i class="fa-sharp fa-solid fa-trash "  onClick={()=>itemDelet(i)} ></i> 
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
            <img className='image' alt="" src={image}/>
            </div>   

        </div>}    
       
    </div>
  )
  }

export default Todo






