import React from 'react'
import { Link } from 'react-router-dom'
import './QuestspaceIcon.css'

export default function QuestspaceIcon () {
    return (
        <Link to='/'>
            <div className={'icon'}>
                <svg width="303" height="21" viewBox="0 0 303 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.88188 14.4714H6.90541V20.6313H0V5.89466H6.90541V11.4651H9.88188L17.0254 5.89466H25.0023L15.5967 12.8503L26.1929 20.6313H17.8588L9.88188 14.4714Z" fill="#262626"/>
                    <path d="M30.346 5.89466H41.9543C44.1767 5.89466 46.0618 5.9929 47.6096 6.18939C49.1573 6.38588 50.4074 6.67079 51.3599 7.04411C52.3521 7.39779 53.0664 7.83007 53.503 8.34094C53.9395 8.85181 54.1578 9.42162 54.1578 10.0504C54.1578 10.6399 53.8601 11.19 53.2649 11.7009C52.6696 12.2118 51.7369 12.644 50.467 12.9977C52.1735 13.3317 53.4038 13.7935 54.1578 14.383C54.9515 14.9724 55.3484 15.6208 55.3484 16.3282C55.3484 16.9963 55.1301 17.5955 54.6936 18.1261C54.257 18.6566 53.5427 19.1085 52.5505 19.4818C51.598 19.8552 50.3479 20.1401 48.8002 20.3366C47.2524 20.533 45.3673 20.6313 43.1449 20.6313H30.346V5.89466ZM37.0133 14.4419V17.9198H43.1449C44.9704 17.9198 46.2404 17.7724 46.9547 17.4777C47.7088 17.1633 48.0858 16.731 48.0858 16.1808C48.0858 15.6307 47.7088 15.2082 46.9547 14.9135C46.2404 14.5991 44.9704 14.4419 43.1449 14.4419H37.0133ZM37.0133 8.6062V11.7893H41.9543C43.8592 11.7893 45.149 11.6518 45.8237 11.3767C46.538 11.1016 46.8952 10.7086 46.8952 10.1978C46.8952 9.68688 46.538 9.29391 45.8237 9.01882C45.149 8.74374 43.8592 8.6062 41.9543 8.6062H37.0133Z" fill="#262626"/>
                    <path d="M73.477 20.8966C71.3339 20.8966 69.4091 20.7394 67.7026 20.425C65.9961 20.091 64.5277 19.6194 63.2974 19.0103C62.0672 18.3815 61.1147 17.625 60.44 16.7408C59.805 15.8566 59.4875 14.8545 59.4875 13.7345V12.7914C59.4875 11.6714 59.805 10.6693 60.44 9.78513C61.1147 8.90093 62.0672 8.15427 63.2974 7.54516C64.5277 6.9164 65.9961 6.44482 67.7026 6.13044C69.4091 5.79641 71.3339 5.6294 73.477 5.6294C77.8028 5.6294 81.2158 6.28763 83.716 7.6041C86.2162 8.92058 87.4664 10.8069 87.4664 13.263V14.4124H66.393C66.5914 15.6503 67.2859 16.5443 68.4765 17.0945C69.6671 17.625 71.3339 17.8903 73.477 17.8903C75.5803 17.8903 77.1082 17.7134 78.0607 17.3598C79.0529 16.9864 79.7077 16.5542 80.0252 16.0629H87.1687C86.8512 16.7506 86.3551 17.3892 85.6805 17.9787C85.0058 18.5682 84.1129 19.079 83.0017 19.5113C81.8904 19.9436 80.5411 20.2874 78.9537 20.5429C77.3662 20.7787 75.5406 20.8966 73.477 20.8966ZM73.477 8.63567C71.453 8.63567 69.8655 8.88128 68.7146 9.3725C67.5637 9.86372 66.8295 10.6399 66.512 11.7009H80.4419C80.1641 10.6006 79.4299 9.8146 78.2393 9.34303C77.0884 8.87146 75.501 8.63567 73.477 8.63567Z" fill="#262626"/>
                    <path d="M105.625 20.8966C103.482 20.8966 101.537 20.7394 99.7913 20.425C98.0848 20.091 96.6164 19.6194 95.3861 19.0103C94.1955 18.3815 93.2629 17.625 92.5882 16.7408C91.9532 15.8566 91.6357 14.8545 91.6357 13.7345V12.7914C91.6357 11.6911 91.9532 10.6988 92.5882 9.8146C93.2629 8.9304 94.2154 8.18375 95.4456 7.57463C96.6759 6.94587 98.1443 6.46447 99.8508 6.13044C101.597 5.79641 103.522 5.6294 105.625 5.6294C109.395 5.6294 112.312 6.09114 114.376 7.01464C116.479 7.93814 117.829 9.13672 118.424 10.6104H111.042C110.725 10.0799 110.07 9.64759 109.078 9.31356C108.086 8.97953 106.836 8.81251 105.327 8.81251C104.454 8.81251 103.621 8.89111 102.827 9.0483C102.073 9.18584 101.399 9.42163 100.803 9.75566C100.208 10.07 99.7318 10.4827 99.3746 10.9935C99.0571 11.4848 98.8983 12.084 98.8983 12.7914V13.7345C98.8983 14.4223 99.0769 15.0215 99.4341 15.5324C99.7913 16.0236 100.268 16.4363 100.863 16.7703C101.458 17.0847 102.133 17.3205 102.887 17.4777C103.681 17.6348 104.494 17.7134 105.327 17.7134C107.034 17.7134 108.324 17.5268 109.197 17.1534C110.11 16.7801 110.725 16.3184 111.042 15.7682H118.424C117.829 17.3205 116.479 18.5682 114.376 19.5113C112.312 20.4348 109.395 20.8966 105.625 20.8966Z" fill="#262626"/>
                    <path d="M119.338 5.89466H144.34V8.90093H135.292V20.6313H128.386V8.90093H119.338V5.89466Z" fill="#262626"/>
                    <path d="M160.155 20.8966C158.012 20.8966 156.067 20.7394 154.321 20.425C152.615 20.091 151.146 19.6194 149.916 19.0103C148.725 18.3815 147.793 17.625 147.118 16.7408C146.483 15.8566 146.166 14.8545 146.166 13.7345V12.7914C146.166 11.6911 146.483 10.6988 147.118 9.8146C147.793 8.9304 148.745 8.18375 149.975 7.57463C151.206 6.94587 152.674 6.46447 154.381 6.13044C156.127 5.79641 158.052 5.6294 160.155 5.6294C163.925 5.6294 166.842 6.09114 168.906 7.01464C171.009 7.93814 172.359 9.13672 172.954 10.6104H165.572C165.255 10.0799 164.6 9.64759 163.608 9.31356C162.616 8.97953 161.365 8.81251 159.857 8.81251C158.984 8.81251 158.151 8.89111 157.357 9.0483C156.603 9.18584 155.928 9.42163 155.333 9.75566C154.738 10.07 154.262 10.4827 153.904 10.9935C153.587 11.4848 153.428 12.084 153.428 12.7914V13.7345C153.428 14.4223 153.607 15.0215 153.964 15.5324C154.321 16.0236 154.797 16.4363 155.393 16.7703C155.988 17.0847 156.663 17.3205 157.417 17.4777C158.21 17.6348 159.024 17.7134 159.857 17.7134C161.564 17.7134 162.854 17.5268 163.727 17.1534C164.64 16.7801 165.255 16.3184 165.572 15.7682H172.954C172.359 17.3205 171.009 18.5682 168.906 19.5113C166.842 20.4348 163.925 20.8966 160.155 20.8966Z" fill="#262626"/>
                    <path d="M196.699 8.90093H184.912V20.6313H178.007V5.89466H203.605V20.6313H196.699V8.90093Z" fill="#262626"/>
                    <path d="M223.521 20.8966C221.378 20.8966 219.453 20.7394 217.747 20.425C216.04 20.091 214.572 19.6194 213.342 19.0103C212.111 18.3815 211.159 17.625 210.484 16.7408C209.849 15.8566 209.532 14.8545 209.532 13.7345V12.7914C209.532 11.6714 209.849 10.6693 210.484 9.78513C211.159 8.90093 212.111 8.15427 213.342 7.54516C214.572 6.9164 216.04 6.44482 217.747 6.13044C219.453 5.79641 221.378 5.6294 223.521 5.6294C227.847 5.6294 231.26 6.28763 233.76 7.6041C236.261 8.92058 237.511 10.8069 237.511 13.263V14.4124H216.437C216.636 15.6503 217.33 16.5443 218.521 17.0945C219.711 17.625 221.378 17.8903 223.521 17.8903C225.625 17.8903 227.153 17.7134 228.105 17.3598C229.097 16.9864 229.752 16.5542 230.069 16.0629H237.213C236.896 16.7506 236.399 17.3892 235.725 17.9787C235.05 18.5682 234.157 19.079 233.046 19.5113C231.935 19.9436 230.585 20.2874 228.998 20.5429C227.411 20.7787 225.585 20.8966 223.521 20.8966ZM223.521 8.63567C221.497 8.63567 219.91 8.88128 218.759 9.3725C217.608 9.86372 216.874 10.6399 216.556 11.7009H230.486C230.208 10.6006 229.474 9.8146 228.284 9.34303C227.133 8.87146 225.545 8.63567 223.521 8.63567Z" fill="#262626"/>
                    <path d="M263.349 10.2272L260.67 12.9682L252.157 20.6313H243.466V5.89466H250.371V16.2987L253.05 13.5577L261.563 5.89466H270.254V20.6313H263.349V10.2272ZM256.86 4.09679C254.122 4.09679 251.998 3.73328 250.49 3.00627C248.982 2.27927 248.228 1.27718 248.228 0H253.586C253.586 0.707359 253.884 1.23788 254.479 1.59156C255.114 1.92559 255.908 2.0926 256.86 2.0926C257.773 2.0926 258.567 1.92559 259.241 1.59156C259.916 1.23788 260.253 0.707359 260.253 0H265.492C265.492 1.27718 264.738 2.27927 263.23 3.00627C261.722 3.73328 259.598 4.09679 256.86 4.09679Z" fill="#262626"/>
                    <path d="M290.201 20.8966C288.058 20.8966 286.113 20.7394 284.367 20.425C282.661 20.091 281.192 19.6194 279.962 19.0103C278.772 18.3815 277.839 17.625 277.164 16.7408C276.529 15.8566 276.212 14.8545 276.212 13.7345V12.7914C276.212 11.6911 276.529 10.6988 277.164 9.8146C277.839 8.9304 278.791 8.18375 280.022 7.57463C281.252 6.94587 282.72 6.46447 284.427 6.13044C286.173 5.79641 288.098 5.6294 290.201 5.6294C293.971 5.6294 296.888 6.09114 298.952 7.01464C301.055 7.93814 302.405 9.13672 303 10.6104H295.618C295.301 10.0799 294.646 9.64759 293.654 9.31356C292.662 8.97953 291.412 8.81251 289.904 8.81251C289.03 8.81251 288.197 8.89111 287.403 9.0483C286.649 9.18584 285.975 9.42163 285.379 9.75566C284.784 10.07 284.308 10.4827 283.951 10.9935C283.633 11.4848 283.474 12.084 283.474 12.7914V13.7345C283.474 14.4223 283.653 15.0215 284.01 15.5324C284.367 16.0236 284.844 16.4363 285.439 16.7703C286.034 17.0847 286.709 17.3205 287.463 17.4777C288.257 17.6348 289.07 17.7134 289.904 17.7134C291.61 17.7134 292.9 17.5268 293.773 17.1534C294.686 16.7801 295.301 16.3184 295.618 15.7682H303C302.405 17.3205 301.055 18.5682 298.952 19.5113C296.888 20.4348 293.971 20.8966 290.201 20.8966Z" fill="#262626"/>
                </svg>
            </div>
        </Link>
    )
}
