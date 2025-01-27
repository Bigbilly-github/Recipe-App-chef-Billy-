
import logo from '../img/header/ChefBilly.svg'

function Header (){

    return(
        <>
           <header className='w-[720px] h-[111px] flex items-center justify-center  bg-[#FFFFFF] shadow'>
                    <div className='w-[226px] h-[60px] flex items-center justify-between'>
                        <img src={logo} className='h-[52px] w-[43px]'/>
                        
                        <h1 className='w-[172px] font-inter font-normal text-[32px] leading-[60px] tracking-tighter text-[#141413]'>Chef Billy</h1>
                    </div>
           </header>
        
        </>
    )

}
export default Header