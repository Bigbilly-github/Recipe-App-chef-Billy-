import { useState } from "react"



function Main (){

    const [Ingredients, setIngredients]= useState([]);


      function handleInput(event) {
        event.preventDefault();
        const formEl = event.currentTarget;
        const formData = new FormData (formEl);
        const ingredient = formData.get("ingredient");
        setIngredients(i => [...i, ingredient]);
        console.log(ingredient);
        formEl.reset();
      }
   
    return(
        <>  
        <main>
                <div className="min-h-[178px] h-auto w-[720px] flex flex-col items-center bg-[#FAFAF8] ">
                   
                      
                                <form  onSubmit={handleInput}  className=" w-[594px] h-[38px] flex justify-center my-auto mx-auto gap-[12px]">
                                    <input aria-label= " add ingredient" type = "text" name="ingredient"  placeholder="e.g oregano" className="px-[13px] py-[9px] w-[399px] font-inter  rounded-[6px] bg-[#FFFFFF] border border-[#D1D5DB] shadow-sm"  />
                                        <button  className="w-[183px] py-[9px] px-[17px] rounded-[6px] text-center font-medium font-inter text-[14px] leading-[20px] bg-[#141413] text-[#FAFAF8]">+ Add ingredient</button>
                                </form>
                                <ul>
                                    {Ingredients.map((ingredient,index)=> <li key={index}>{ingredient}</li>)}
                                </ul>
                </div>
                

        </main>

        </>
    )

}
export default Main