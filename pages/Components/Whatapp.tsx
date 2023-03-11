import { useState } from "react";
function Whatapp(){
    
    const mainClassName = "social";
    const [classname,setClassname] = useState(mainClassName);
    
    function Toggle(){
    
    if(classname == "social"){
    setClassname("social hide");
    }else{
    setClassname("social");
    }
    }
    
    
    
    return(
    <>
        <div className="wrapper">
            <a className={classname} href="https://api.whatsapp.com/message/Z6KLC7AO36AHA1?autoload=1&app_absent=0"><i className="bi bi-whatsapp p-3"></i></a>
            <a className={classname} href="#Footer"> <i className="bi bi-telephone-fill "></i></a>
            <a className="close-button" onClick={Toggle} href="#"> <i className="bi bi-x"></i></a>
        </div>
    </>
    );
    }

    export default Whatapp
