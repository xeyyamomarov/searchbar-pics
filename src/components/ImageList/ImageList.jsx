import "./style.css"
import {ImageShow} from "../ImageShow"
export const ImageList=({images})=>{
    const renderedImages = images.map((image)=>{
        return <ImageShow key={image.id} image={image}/>
    })
    return(
        <div className="image-list">{renderedImages}</div>
    )
}