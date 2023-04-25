
export default function Icon({ src, alt, w,click}) {
    return <>
        <div onClick={click}>
            <img className={`w-${w}`} src={src} alt={alt}/>
        </div>
    </>
}