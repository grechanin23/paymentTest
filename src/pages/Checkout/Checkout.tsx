import { Breadcrumbs, Footer } from 'components'
import Logo from 'components/ui/Logo/Logo'
import { CustomerContactsSection, CustomerPaymentSection, TotalCostSection } from './components'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ICustomerInfoForm } from './types/ICustomerInfoForm'

function Checkout() {
  const customerInfoForm = useForm<ICustomerInfoForm>()
  const [activeSection, setActiveSection] = useState<'contacts' | 'payment'>('contacts')
  return (
    <div id='wrapper w-100 d-block'>
      <div className='container small-container'>
        <div className='mobile-data w-100 d-block d-lg-none'>
          <Logo />
          <Breadcrumbs />
        </div>

        <div className='d-flex flex-wrap w-100'>
          <div className='right-side flex-auto order-lg-1'>
            <TotalCostSection />
          </div>

          <div className='left-side flex-auto order-lg-0'>
            <Logo />
            <Breadcrumbs lg />
            {activeSection === 'contacts' ? (
              <CustomerContactsSection
                customerInfoForm={customerInfoForm}
                onContinuePaymentClick={() => setActiveSection('payment')}
              />
            ) : (
              <CustomerPaymentSection onReturnButtonClick={() => setActiveSection('contacts')} />
            )}

            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
