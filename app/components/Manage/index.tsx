"use client"
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';


const names = [
    {
        heading: "Unitaire",
        price: 4000,
        pack: 'Grande bouteille',
        button: "Acheter",
        filled: 'Moyenne: XOF 2500',
        templates: "Installation",
        furniture: "Fourniture d'utilisation",
        support: '24/7 Support',
        category: 'Monthly'
    },
    {
        heading: "Moyen",
        price: 130000,
        pack: 'Par mois',
        button: "Acheter",
        filled: '30 recharges',
        bottle: 'Limite: 1 bouteille par livraison',
        templates: "Installation",
        furniture: "Fourniture d'utilisation",
        support: '24/7 Support',
        category: 'Monthly'
    },
    {
        heading: "Simple",
        price: 360000,
        pack: '3 mois',
        button: "Acheter",
        filled: '100 recharges',
        bottle: 'Limite: 5 bouteille par livraison',
        templates: "Installation",
        furniture: "Fourniture d'utilisation",
        support: '24/7 Support',
        category: 'Monthly'
    },
    {
        heading: "Elevé",
        price: 690000,
        pack: '6 mois',
        button: "Acheter",
        filled: '220 recharges',
        bottle: 'Limite: 10 bouteille par livraison',
        templates: "Installation",
        furniture: "Fourniture d'utilisation",
        support: '24/7 Support',
        category: 'Monthly'
    },
   


]

const Manage = () => {
/*     
    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'monthly' : 'yearly');
    }

    const filteredData = names.filter(items => items.category === selectedCategory); */

    return (
        <div id="services-section">
            <div className='mx-auto max-w-9xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>Manage All Your Social Media <br /> Profiles From One Place.</h3>


                <div className='md:flex md:justify-around mt-20'>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Première livraison gratuite </h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Conseil et assistance</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Annulez à tout moment</h4>
                    </div>
                </div>


                {/* <div className='mt-10 relative'>
                    <div className='flex justify-center'>
                        <h3 className='text-sm font-medium mr-5'>Forfait annuel</h3>
                        <Switch
                            checked={enabled}
                            onChange={toggleEnabled}
                            className={`${enabled ? 'bg-darkpurple' : 'bg-darkpurple'
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only text-black">Enable notifications</span>
                            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                        <h3 className='text-sm font-medium ml-5'>Forfait mensuel</h3>
                    </div>
                </div> */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-16 mx-5 gap-14 manage'>
                    {names.map((items, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
                            <h2 className='text-3xl sm:text-4xl font-extrabold mb-3'>XOF {items.price}</h2>
                            <p className='text-lg font-bold text-darkgrey mb-6'>{items.pack}</p>
                            <button className='text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-4 border-gold rounded-full py-4 px-12 mb-6'>{items.button}</button>
                            <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
                            <h3 className='text-lg font-bold text-blue mb-3 mt-6'>{items.filled}</h3>
                            <h3 className='text-lg font-bold text-darkgrey mb-3'>{items.bottle}</h3>
                            <h3 className='text-lg font-bold text-darkgrey mb-3'>{items.templates}</h3>
                            <h3 className='text-lg font-bold text-darkgrey mb-3'>{items.furniture}</h3>
                            <h3 className='text-lg font-bold text-darkgrey mb-3'>{items.support}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Manage;
