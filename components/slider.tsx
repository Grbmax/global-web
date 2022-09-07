import React, { useRef, useContext } from 'react'
import { SizeContext } from '../utils/size-observer'

interface Props {
    initialOffsetX: number
    className: string
    contentWidth: number
    children?: React.ReactNode
}

 const SliderContainer : React.FC<Props> = ({children, initalOffsetX, className, ContentWidth }) =>{
    const { innerWidth } = useContext(SizeContext)
    const refScrollX = useRef<number>(initalOffsetX)
    const refContainer = useRef<HTMLDivElement>(null)
    const refContent = useRef<HTMLDivElement>(null)

    const enabled = innerWidth < ContentWidth

    return(
        <div ref={refContainer} className={`slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${className}`}>
            <div ref={refContent} className='inline-block'>{children}</div>
        </div>
    )

}

interface ItemProps{
    width: number 
    children?: React.ReactNode    
    
}
export const SliderItem: React.FC<ItemProps> = ({childern, width}) => (
<div style={{ width }}>{childern}</div>
)
export default SliderContainer 