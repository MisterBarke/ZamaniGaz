import Image from "next/image";

const Digital = () => {
    return (

        <div className="mx-2">
            <div className='mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl bg-blue relative'>
                <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}

                    <div className="pt-24 lg:pl-24 ">
                        <h3 className="text-lg font-bold mb-5 tracking-widest text-center text-gold lg:text-start">Restez chez vous !</h3>
                        <h4 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">Faites vous livrer <br /> vos bouteilles <br /> à votre porte.</h4>
                        <div className="text-center lg:text-start">
                            <button className="text-xl font-bold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full">Commander</button>
                        </div>
                    </div>

                    {/* COLUMN-2 */}

                    <div>
                        <div className="lg:absolute mr-20 girldoodle">
                            <Image src="/images/digital/girldoodle.png" alt="girldoodle" width={615} height={591} />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Digital;
