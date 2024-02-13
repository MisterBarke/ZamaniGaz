import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "A propos de nous.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Nous sommes une équipe dévouée fournissant des solutions de gaz fiables pour votre foyer. Avec un service client exceptionnel, nous nous engageons à rendre votre expérience avec notre entreprise aussi fluide que possible.',
        link: 'Plus'
    },
    {
        heading: "Services.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: "Nous fournissons du gaz de qualité supérieure pour répondre à vos besoins énergétiques domestiques. De la livraison à l'installation, nous vous offrons un service complet pour garantir votre confort et votre sécurité.",
        link: 'Plus'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
              
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>A propos de nous.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white text-center rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5 m-auto"  />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;