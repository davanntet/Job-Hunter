
export default function Icon({ src, alt, w }) {
    return <>
        <div>
            <img className={`w-${w}`} src={src} alt={alt}/>
        </div>
    </>
}