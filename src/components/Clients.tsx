import React from 'react'

const clients = [
  { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' },
  { name: 'Warner Bros', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/200px-Warner_Bros_logo.svg.png' },
  { name: 'Mailchimp', logo: 'https://mailchimp.com/release/plums/cxp/images/mailchimp-logo-default.svg' },
  { name: 'Adobe', logo: 'https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg' },
  { name: 'Upwork', logo: 'https://www.upwork.com/static/assets/TopNavSsi/brand-assets/logo-green.png' },
  { name: 'Creative Cloud', logo: 'https://www.adobe.com/content/dam/cc/icons/cc_appicon_64.svg' },
  { name: 'Woocommerce', logo: 'https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce.svg' },
  { name: 'Canva', logo: 'https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg' },
]

const Clients: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8">Meet my recent clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={client.logo} alt={client.name} className="h-8 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients