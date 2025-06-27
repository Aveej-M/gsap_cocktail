import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText('.title', {type: 'chars, words'});
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines'})

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.05
    })

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      delay: 1,
      ease: 'expo.out',
      stagger: 0.06
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })

    .to('.right-leaf', {y: 200}, 0)
    .to('.left-leaf', {y: -200}, 0)
  });

  return (
    <>
      <section id='hero' className='noisy relative z-10 min-h-dvh w-full border border-transparent'>
          <h1 className='title absolute top-[15%] left-[40%] text-9xl font-bold'>Mojito</h1>

          <img src="/images/cocktail-left-leaf.png" alt="left-leaf" className='left-leaf'/>

          <img src="/images/cocktail-right-leaf.png" alt="right-leaf" className='right-leaf'/>

          <div className='body'>
            <div className='content'>
              <div>
                <p>Cool. Crispp. Classic</p>
                <h1 className="subtitle font-bold text-3xl text-amber-400 font-serif">Sip the Spirit <br /> of Summer</h1>
              </div>

              <div className='view-cocktails space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full'>
                <p className='subtitle'>
                  Every cocktail on our menu is a blend of premium ingredients, flair, and passion - designed to delight your senses.
                </p>
                <a href="cocktials" className='relative min-h-dvh w-full overflow-hidden'> View Cocktails</a>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Hero