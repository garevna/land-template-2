/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  browserTabTitle: 'DGtek',
  emailSubject: 'DGtek for the owner’s corporation',
  emailText: 'Thank you for your interest in DGtek. A member of our team will be in touch shortly.',
  mainNavButtons: ['Benefits', 'Articles', 'FAQ', 'Call back'],
  mainNavSectors: ['#benefits', '#articles', '#faq', '#contact'],
  top: {
    header: 'Get Ultra-Fast Fibre Internet in Your Apartment Building - At No Cost to The Owner’s Corporation',
    text: 'DGtek’s residential fibre improves internet access for your building’s residents. Up to 900% faster than the NBN. You’ll be the residents’ hero, once you secure a 21st-century internet connection for your neighbours, and the Owner’s Corporation pays nothing for the work.',
    button: 'Get In Touch',
    goto: '#contact',
    image: '@/assets/pictures/lady-on-sofa.svg'
  },
  aside: {
    header: 'Get in touch with our team to learn more!',
    text: '[Offer text... Offer text... Offer text... Offer text... Offer text... Offer text... Offer text... Offer text... Offer text... Offer text... Offer text... Offer text...]',
    offer: [
      {
        blackText: '[ Relevant ]',
        redText: '[ Information ]'
      },
      {
        blackText: '[Relevant]',
        redText: '[Information]'
      }
    ],
    smallText: [
      '* text 1',
      '** text 2'
    ]
  },
  userForm: {
    title: 'Get in touch with our team to learn more!',
    messagePlaceholder: 'Enquiry*',
    button: 'Submit',
    fieldsToShow: {
      name: {
        placeholder: 'Full name*',
        show: true
      },
      email: {
        placeholder: 'Email*',
        show: true
      },
      phone: {
        placeholder: 'Phone',
        show: false
      },
      address: {
        placeholder: 'Address',
        show: true
      },
      postcode: {
        placeholder: 'Postcode',
        show: true
      },
      state: {
        placeholder: 'State',
        available: ['VIC', 'NSW', 'ACT', 'QLD', 'SA', 'WA', 'TAS', 'NT'],
        show: true
      },
      list: {
        placeholder: 'Custom select',
        available: ['first', 'second', 'third'],
        show: false
      },
      number: {
        placeholder: 'Custom numeric',
        show: false
      },
      combo: {
        placeholder: 'Custom combobox',
        available: ['first', 'second', 'third'],
        show: false
      },
      message: {
        placeholder: 'Enquiry',
        show: true
      }
    }
  },
  benefits: {
    header: 'What DGtek Can Do For You',
    text: 'We’ll wire your building, carefully, with optical fibre. We’ll upgrade your CCTV and provide FTTH internet. We’ll get you faster, cheaper and the most reliable connection. With DGtek you’ll always have superior internet that will improve the online experience and add significant value to your residents’ homes and lives.',
    button: 'Get A Designer On Site',
    goto: '#contact',
    items: [
      {
        title: 'Ultra-Fast',
        icon: require('@/assets/benefits/speed.svg'),
        text: 'Up to 1000Mbps download and upload speeds. Only possible with fibre.'
      },
      {
        title: 'Unmatched Reliability',
        icon: require('@/assets/benefits/globe.svg'),
        text: '99.9% uptime. Our brand-new fibre has gone years without a single fault or service disruption.'
      },
      {
        title: 'Security',
        icon: require('@/assets/benefits/security.svg'),
        text: 'Improve your CCTV to protect and monitor your building in 4K resolution and unbreakable end-to-end optical encryption.'
      }
    ]
  },
  testimonials: {
    header: '[Title for reviews]',
    button: 'Reviews button'
  },
  faq: {
    header: 'FAQs Owner’s Corporations Ask About DGtek',
    button: 'Get in Touch',
    goto: '#contact',
    items: [
      {
        question: 'How Do Residents Connect to DGtek fibre?',
        answer: 'DGtek is not an internet retailer.<br>We will wire your building with fibre optics and in doing so enable independent retailers to come in and sell connections to the internet over our network to individual apartments.<br>No retailer is given preference or priority on our network and residents can connect with any company they choose.'
      },
      {
        question: 'Why is DGtek Offering Fiber for Free?',
        answer: 'We are an open-access wholesale infrastructure provider. We can’t legally sell internet directly to residents so our incentive is to increase the reach of our network so our retailers can connect more people.<br>Instead of charging you for the work, we’ll recoup our investment over several years by offering superior internet services to your residents - and charging our retailers to provide it.<br>Our ultra-fast fibre will retain you and your residents as satisfied end-users for years to come.'
      },
      {
        question: 'Will DGtek Disrupt Existing Telephone and Internet Services?',
        answer: 'No.<br>DGtek’s fibre is completely separate from any infrastructure that’s currently in your building. Therefore, it won’t affect any NBN or other 3rd party services. Customers can have both DGtek and the NBN at the same time. Keep their landline, or switch off the NBN entirely. It’s up to them.<br>On a slightly more technical note, as optical fibre does not use electricity or electromagnetic radiation to send information, like copper and HFC technologies, it’s absolutely impossible for fibre to disrupt electronics or interfere with any existing tech. The same can be said of existing tech interfering with fibre. You can twist a fibre optic cable around a power cable, and there will be zero disruption to either service.'
      },
      {
        question: 'How Does DGtek Connect A Building?',
        answer: 'It depends on the specifics of your building. There are many different network designs and custom solutions. Without understanding your building it’s hard to say ahead of time, what’s going to work best.<br>Contact DGtek, and we’ll send designers on-site to see what works best for your building. Once we have this information, we’ll meet with the owner’s corporation face-to-face and present our findings.<br>Speaking generally, here’s how the fibre normally goes in.<br>We run fibre in from the street and install our equipment in the MDF (Main Distribution Frame) on the ground floor or in the basement.<br>We run fibre from the MDF to each level’s comms rooms, and in the cabinet or dedicated room, for larger buildings, we’ll configure what’s called a level-router in the MDU. This device sends and collects data from all the individual units.<br>If you have any CCTV cameras on that level, the HD video stream will travel through this level router before it’s directed to the building manager’s office or we’ll work out another design that will route the CCTV footage off-site to your 3rd party security company.'
      }
    ]
  },
  blog: {
    header: 'Articles',
    articles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  footer: {
    topHead: 'READY TO GET STARTED?',
    topText: 'Leave your inquiry and we\'ll get back to you within 24 hours on business days'
  }
}

const getters = {
  editorEndpoint: (state, getters, rootState) => `${rootState.host}/content`
}

const mutations = {
  //
}

const actions = {
  async GET_DATA ({ getters, commit }) {
    return true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
