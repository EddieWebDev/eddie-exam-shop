import { useCreateStripe } from "../../queries/stripe/hooks/useCreateStripe"

function About() {
    
    const {mutate} = useCreateStripe()

    const handleClick = () => {
        mutate()
    }

    return(
        <section>
            <h1>About</h1>
            <button onClick={() => handleClick()}>STRIPE</button>
        </section>
    )
}

export default About