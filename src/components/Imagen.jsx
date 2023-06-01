import { motion, useInView} from 'framer-motion';
import { useRef } from 'react';

const variants={
    inicial:{
        opacity:0, scale:0
    },
    animate:()=>({
        opacity:1,
        scale:1,
        transition:{
            duration:1.5,
            delay:1
        }
    })
}
const Imagen = ({gif,index}) => {

    const ref= useRef(null);
    const visible=useInView(ref,{once:true});
  return (
      <motion.img ref={ref} initial="inicial" animate={visible?"animate":""} variants={variants} custom={{index}} whileTap={{scale:1.2}} className="gif" src={gif.images.original.url} alt={gif.title} />
  );
}

export default Imagen