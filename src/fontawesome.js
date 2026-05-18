// src/fontawesome.js
import { library } from "@fortawesome/fontawesome-svg-core"

// Brands
import {
    faFacebookF,
    faInstagram,
    faTwitter
} from "@fortawesome/free-brands-svg-icons"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

// Solid
import {
    faBox,
    faTags,
    faList,
    faQuestionCircle,
    faInfoCircle,

    // 🔥 NEW (Header + Menu)
    faBars,
    faTimes,
    faHeart,
    faShoppingCart,
    faGlobe,
    faChevronDown
} from "@fortawesome/free-solid-svg-icons"

library.add(
    // brands
    faFacebookF,
    faInstagram,
    faTwitter,

    // existing
    faBox,
    faTags,
    faList,
    faQuestionCircle,
    faInfoCircle,

    // 🔥 new
    faBars,
    faTimes,
    faHeart,
    faShoppingCart,
    faGlobe,
    faChevronDown
)