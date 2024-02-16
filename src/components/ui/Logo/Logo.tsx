import logoBlue from 'assets/images/logoBlue.png'

function Logo({ lg }: { lg?: boolean }) {
  return (
    <div className={`checkout-logo w-100 ${lg ? 'd-none d-lg-block' : 'd-block'}`}>
      <img src={logoBlue} alt='' className={lg ? 'm-auto d-block' : ''} />
    </div>
  )
}

export default Logo
