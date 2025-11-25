import { useEffect, useState } from 'react'

export const LandingPage = () => {
    const [screenSize, setScreenSize] = useState('desktop')
    const [styling, setStyling] = useState({});
    const items = ('ExtraTicket').split("").reverse();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setScreenSize('mobile')
            else if (window.innerWidth < 1024) setScreenSize('tablet')
            else setScreenSize('desktop')
        }
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (screenSize == 'desktop') {
            setStyling({
                mainClass: 'h-screen bg-gradient-to-r from-blue-300 via-blue-600 to-blue-800 overflow-hidden',
                textSize: 'text-[100px]'
            })
        } else if (screenSize == 'tablet') {
            setStyling({
                mainClass: 'h-screen bg-gradient-to-r from-blue-300 via-blue-600 to-blue-800 overflow-hidden',
                textSize: 'text-[75px]'
            })
        } else {
            setStyling({
                mainClass: 'h-screen bg-gradient-to-r from-blue-300 via-blue-600 to-blue-800 overflow-hidden',
                textSize: 'flex flex-col items-center font-bold tracking-wide text-[100px] rotate-270 p-1'
            })
        }
    }, [screenSize])

    return (
        <div className={styling.mainClass}>
            <div className="wrap-break-word">
                {items.map((text, idx) => (
                    <span
                        key={idx}
                        className={`${styling.textSize} text-white bevan-regular`}
                    >
                        {text}
                    </span>
                ))}
            </div>
            <style jsx>{`
        .bevan-regular {
          font-family: "Bevan", serif;
          font-weight: 400;
          font-style: normal;
        }

        .bevan-regular-italic {
          font-family: "Bevan", serif;
          font-weight: 400;
          font-style: italic;
        }
      `}</style>
        </div>
    );
};
