import Button from "../Components/Button";
import {arrowRight} from '../assets/icons'
import { offer } from "../assets/images";

const SpecialOffer = () => {
    return (
        <section className="flex justify-center wrap max-container items-center max-xl:flex-col-reverse gap-10 ">
            <div className="flex-1">
                <img src={offer} alt="" width={773} height={687} className="object-contain w-full"/>

            </div>
            <div className="flex flex-1 flex-col">

                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className="text-coral-red">
                        Special
                    </span>
                    Offer

                </h2>
                <p className="mt-4 lg:max-w-lg info-text ">
                    Embark on a shopping journey that readliness your experience
                    with unbeatable deals. From premier selections to incredible
                    savings, we offer unparalleled value that sets us apart.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                     Navigate a realm of possibilities designed to fulfil your unique
                    desires, surpasing the loftiest expecttions. Your journey with us
                    is nothing short of expectational.
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label='Shop now' iconURL={arrowRight} />
                    <Button label='Learn more' backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />

                </div>

            </div>


        </section>
    );
}

export default SpecialOffer;