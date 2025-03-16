import { useState } from "react"



function Main (){

    const [Ingredients, setIngredients]= useState([]);


      function handleInput(event) {
        event.preventDefault();
        const formEl = event.currentTarget;
        const formData = new FormData (formEl);
        const ingredient = formData.get("ingredient");
        if(ingredient.trim() !=="") {
          setIngredients(I => [...I, ingredient]);
          

      }
        
        console.log(ingredient);
        formEl.reset();
      }
   
    return(
        <>  
        <main>
                <div className="min-h-[178px] h-auto w-[720px] rounded-2xl rounded-t-none pt-[50px] bg-[#FAFAF8] ">
                   
                      
                                <form  onSubmit={handleInput}  className=" w-[594px] h-[38px] flex justify-center my-auto  mb-[48px] mx-auto gap-[12px]">
                                    <input aria-label= " add ingredient" type = "text" name="ingredient"  placeholder="e.g oregano" className="px-[13px] py-[9px] w-[399px] font-inter  rounded-[6px] bg-[#FFFFFF] border border-[#D1D5DB] shadow-sm"  />
                                        <button  className="w-[183px] py-[9px] px-[17px]  hover:bg-[#FAFAF8] hover:text-[#141413] transition duration-150 rounded-[6px] text-center font-medium font-inter text-[14px] leading-[20px] bg-[#141413] text-[#FAFAF8]">+ Add ingredient</button>
                                </form>
                              

                                {Ingredients.length > 0 ? <section className="self-start ml-[65px] h-auto font-inter pb-[20px] "> 
                                                <h2 className="font-extrabold text-[24px] mb-[25px]">Ingredients on hand:</h2>
                                                <ul className="h-auto list-disc pl-[20px] text-[18px] leading-[28px] mb-[48px] text-[##475467]" aria-live="polite">
                                                    {Ingredients.map((ingredient,index)=> <li key={index}>{ingredient}</li>)}
                                                </ul>
                                              { Ingredients.length > 3 ? <div className="flex justify-between w-[600px] items-center rounded-[8px] bg-[#F0EFEB] pt-[10px] pb-[10px]  pl-[28px]  pr-[28px]">
                                                    <div  className="">
                                                        <h3 className="text-[1.125rem]  leading-[24px] mb-[8px]">Ready for a recipe?</h3>
                                                        <p className="text-[0.875rem] text-[#6B7280] leading-[20px]">Generate a recipe from your list of ingredients.</p>
                                                    </div>
                                                    <button className="border-0 rounded-[6px]  bg-[#D17557]  hover:text-[#D17557]  shadow-xl text-[#FAFAF8] transition duration-150 hover:bg-[#FAFAF8]  py-[9px] px-[17px]  font-inter text-[0.875rem] cursor-pointer">Get a recipe</button>
                                                </div> : null}
                                  </section>: null
                                  }
        
                </div>
                

        </main>

        </>
    )

}
export default Main