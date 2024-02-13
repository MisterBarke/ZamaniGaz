"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Ismael Abdou",
        profession: 'Restaurateur',
        comment: ' Je suis extrêmement satisfait. La facilité avec laquelle je peux planifier une recharge en ligne et la rapidité avec laquelle elle est effectuée sont impressionnantes ',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Kader Sunna",
        profession: 'Vendeur de frites',
        comment: "La livraison de bouteilles de gaz à domicile a vraiment simplifié ma vie. Ne plus avoir à transporter de lourdes bouteilles de gaz jusqu'au magasin est un énorme soulagement. De plus, le service de livraison est toujours ponctuel, et les livreurs sont professionnels et sympathiques.",
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Leila Halidou",
        profession: 'Restauratrice',
        comment: "J'ai eu quelques problèmes avec ma bouteille de gaz et j'ai contacté le service d'assistance. Non seulement ils ont répondu rapidement à ma demande, mais ils ont également envoyé un technicien pour résoudre le problème le jour même.",
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        name: "Mariam Ali",
        profession: 'Ménagère',
        comment: 'e processus est simple et efficace, et mes bouteilles sont toujours prêtes quand je en ai besoin. Je suis très satisfait de la fiabilité et de la rapidité du service.',
        imgSrc: '/images/testimonial/user1.svg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">Ce que nos clients disent de nous.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">Ce que nos clients disent de nous.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">Ce que nos clients disent de nous.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base text-gold font-bold pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
