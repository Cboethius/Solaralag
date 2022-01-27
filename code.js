
const ani = gsap.timeline()

ani.to('.animation img', {
scale: 1.4,
duration:0.6,
ease:'linear'
})
.to('.animation img',{
scale: 1,
duration:0.6,
ease:'bounce.out'
})
.to('.animation img',{
scale: 1.4,
duration:0.6,
ease:'linear'
})
.to('.animation img',{
scale: 1,
duration:0.6,
ease:'bounce.out'
})
.to('.animationg img',{
scale: 1.4,
duration:0.6,
ease:'linear'
})
.to('.animation, .animationg img ',{
scale: 1,
duration:0.1,
ease:'bounce.out',
autoAlpha: 0,
});
