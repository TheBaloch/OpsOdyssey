import Link from "next/link"
import CounterUp from "../elements/CounterUp"


export default function Journey() {
    return (
        <>
            <section className="journey_area-seven">
                <div className="container">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title text-center mb-40 tg-heading-subheading animation-style3">
                                    <span className="sub-title">Features  Projects</span>
                                    <h2 className="title tg-element-title">Our Journey Towards<br className="d-none d-lg-block" /> Financial Excellence</h2>
                                    <p className="mb-25">With a track record of success, we have served numerous clients worldwide, providing top-notch financial and accounting services.</p>
                                    <Link href="/about" className="btn" data-aos="fade-up" data-aos-delay={600}>See All Services</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-counter-home7">
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="counter-item">
                                    <div className="icon">
                                        <i className="flaticon-trophy" />
                                    </div>
                                    <div className="content">
                                        <h2 className="count"><CounterUp count={45} />+</h2>
                                        <p>Successfully <br /> Completed Projects</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="counter-item">
                                    <div className="icon">
                                        <i className="flaticon-time" />
                                    </div>
                                    <div className="content">
                                        <h2 className="count"><CounterUp count={25} />+</h2>
                                        <p>Years of Experiences <br /> To Run This Company</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="counter-item">
                                    <div className="icon">
                                        <i className="flaticon-happy" />
                                    </div>
                                    <div className="content">
                                        <h2 className="count"><CounterUp count={92} />K</h2>
                                        <p>Satisfied <br /> 100% Our Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="counter-item">
                                    <div className="icon">
                                        {/* <i class="flaticon-china"></i> */}
                                        <svg width={68} height={54} viewBox="0 0 68 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.79247 27.7841L5.53844 28.5781C5.17621 29.7104 5.29605 30.0832 5.35052 30.2527L5.35288 30.2601C5.37127 30.3175 5.38355 30.3513 5.40007 30.3969C5.41319 30.4331 5.42898 30.4766 5.45263 30.5452C5.49411 30.6654 5.54865 30.8352 5.58145 31.0352C5.65542 31.4862 5.59496 31.9332 5.39705 32.4172L5.33986 32.5571L5.24978 32.6784C5.09493 32.8869 4.90669 33.0618 4.76486 33.1864C4.66007 33.2784 4.53811 33.3788 4.43338 33.465C4.39598 33.4958 4.36078 33.5248 4.32934 33.551C4.27894 33.5929 4.23291 33.6318 4.19081 33.6683C4.35947 33.7587 4.59481 33.8662 4.9143 33.9967C5.02894 34.0435 5.15475 34.0934 5.28765 34.1461C5.71479 34.3156 6.21512 34.5141 6.65292 34.7323C7.18946 34.9998 7.84811 35.3952 8.28031 36.0168C8.93465 36.7492 9.43505 37.4197 9.85749 37.9857L9.88212 38.0187C10.3352 38.6257 10.669 39.0666 11.0349 39.4256C11.6643 40.043 12.4677 40.5029 14.443 40.608L14.502 40.6111L14.5603 40.62C14.6325 40.631 14.7501 40.6194 15.2146 40.4416C15.2403 40.4318 15.2673 40.4214 15.2955 40.4104C15.6833 40.2604 16.3051 40.0198 17.0228 40.0223L17.0525 40.0224L17.0821 40.0239C17.8736 40.0657 18.5948 40.4326 19.0321 40.655C19.1044 40.6918 19.1689 40.7246 19.2247 40.7514C19.7111 40.9846 19.932 41.0226 20.1766 40.9545L20.1954 40.9493L20.2143 40.9447C20.3867 40.9027 20.5822 40.799 20.8377 40.5913C21.0222 40.4413 21.171 40.2976 21.3493 40.1254C21.4505 40.0277 21.5611 39.9209 21.6932 39.7985C21.9968 39.5171 22.4312 39.1397 22.9787 38.9313C23.5746 38.7045 24.2244 38.7044 24.8813 38.9959C25.4906 39.188 26.1981 39.4745 26.8034 39.7536C27.1222 39.9005 27.4265 40.0518 27.6849 40.194C27.9192 40.3229 28.1922 40.4854 28.3934 40.6591L28.4355 40.6955L28.4741 40.7356C29.7995 42.1144 29.7558 43.6665 29.4689 44.9504C29.365 45.4154 29.2161 45.9006 29.0835 46.333C29.0437 46.4628 29.0053 46.5878 28.9701 46.7061C28.8239 47.1969 28.7139 47.6222 28.6654 48.0162C28.6696 48.0303 28.6727 48.0369 28.6732 48.038C28.6733 48.0383 28.6735 48.0385 28.6736 48.0387L5.79247 27.7841ZM5.79247 27.7841L5.13699 27.269C3.35815 25.871 2.37366 25.0073 1.8456 24.4389C1.63284 24.2098 1.52797 24.0637 1.47834 23.9833C1.48389 23.9701 1.49024 23.9553 1.4975 23.9387C1.50281 23.9265 1.50864 23.9133 1.51492 23.899C1.57815 23.7557 1.68695 23.509 1.76172 23.2137C1.94051 22.5076 1.89786 21.6871 1.48495 20.5967M5.79247 27.7841L1.48495 20.5967M1.48495 20.5967C1.47598 20.5606 1.46922 20.5298 1.46422 20.5033M1.48495 20.5967L1.46422 20.5033M1.46422 20.5033C1.52159 20.4559 1.56876 20.4321 1.60388 20.418C1.67267 20.3905 1.76688 20.3726 1.91321 20.3784C2.06946 20.3847 2.24011 20.415 2.4726 20.4631C2.49233 20.4672 2.51394 20.4718 2.53719 20.4767C2.72646 20.5167 3.02438 20.5797 3.29529 20.5899L3.31844 20.5908L3.34161 20.5908C4.54632 20.5896 6.13566 20.3809 7.49576 19.7827C8.54536 19.3296 9.08062 18.7291 9.64684 18.0516C10.2056 17.4397 10.5402 16.8381 10.6877 16.2265C10.8369 15.6082 10.7661 15.0904 10.705 14.7454C10.6946 14.687 10.686 14.6407 10.6787 14.6018C10.7073 14.6038 10.7397 14.6062 10.7763 14.6092C10.7874 14.6101 10.7992 14.6111 10.8115 14.6121C11.1056 14.637 11.7172 14.6887 12.3409 14.3628M1.46422 20.5033L30.441 51.159C30.4952 51.163 30.5543 51.1662 30.6185 51.1688C30.7051 51.1723 30.7798 51.1741 30.8597 51.176C30.9072 51.1771 30.9565 51.1783 31.0113 51.1799C31.1145 51.1829 31.2758 51.188 31.4268 51.2089C31.6546 51.2349 31.8981 51.2972 32.0574 51.338L32.0693 51.341C32.0876 51.3457 32.1054 51.3502 32.1229 51.3547C32.199 51.3742 32.2682 51.3919 32.3327 51.4077C32.3844 51.2636 32.4305 51.1403 32.4715 51.0438C32.577 50.7955 32.7959 50.344 33.3473 50.1219C33.5072 50.0575 33.6699 50.0269 33.7243 50.0166C33.7287 50.0158 33.7324 50.0151 33.7354 50.0145C33.8055 50.0009 33.8528 49.9917 33.9148 49.975C34.031 49.9436 34.2529 49.8706 34.6368 49.6654L34.6433 49.662L34.6498 49.6586C34.8698 49.5444 35.0905 49.4134 35.3278 49.2701C35.3545 49.2539 35.3817 49.2375 35.4093 49.2208C35.6134 49.0972 35.8396 48.9602 36.0542 48.8445C36.2923 48.7161 36.594 48.5699 36.9191 48.4899C37.2202 48.4158 37.6443 48.3739 38.0825 48.5512C38.0953 48.5549 38.1081 48.5586 38.1211 48.5623C38.7525 48.7455 39.6465 49.0047 40.3866 49.6202L40.4266 49.6535L40.4636 49.6901C40.8941 50.1163 41.1477 50.4868 41.329 50.7984C41.3787 50.8838 41.4426 51.001 41.4828 51.0748C41.4981 51.1027 41.5099 51.1244 41.5163 51.1358C41.5265 51.154 41.535 51.1686 41.5418 51.1801C41.6421 51.2143 41.9639 51.2988 42.8017 51.3637L42.833 51.3661L42.8642 51.3701C43.0915 51.3998 43.2885 51.4662 43.433 51.5231C43.5753 51.579 43.7122 51.6446 43.8103 51.6915L43.814 51.6933C43.9312 51.7494 44.0116 51.7866 44.0703 51.8115C45.7968 51.6285 46.6686 51.0723 47.8912 50.2924C48.3007 50.0312 48.7495 49.7448 49.2831 49.439C49.9021 48.9995 50.4641 48.8039 51.0483 48.7869C51.3057 48.7794 51.5362 48.8088 51.6838 48.8276L51.6921 48.8287C51.8582 48.8498 51.9426 48.8601 52.0322 48.8609C52.2274 48.8626 52.8792 48.8517 54.844 46.9834C55.0434 46.7549 55.2208 46.557 55.3764 46.3839L55.4077 46.349C55.5612 46.1782 55.6871 46.038 55.7985 45.9091C56.0336 45.637 56.1596 45.4647 56.253 45.2925C56.4465 44.9354 56.5852 44.4322 56.8299 42.8714L56.8318 42.8592L56.834 42.847C56.9548 42.1684 57.2926 41.6447 57.6222 41.2502C57.8678 40.9561 58.1671 40.671 58.3999 40.4492C58.4597 40.3923 58.5151 40.3395 58.5641 40.2918C59.1255 39.7453 59.1601 39.5749 59.129 39.4047C59.1254 39.3973 59.1045 39.3414 59.0419 39.2118C58.9923 39.1091 58.9401 39.0063 58.8786 38.8854C58.836 38.8016 58.789 38.7092 58.7354 38.6021C58.5018 38.135 58.1995 37.4996 58.0241 36.8267C57.2807 34.3381 56.7781 33.7095 56.4375 33.3946C56.3726 33.3346 56.2746 33.2616 56.1518 33.1701C55.7192 32.8479 54.9796 32.2968 54.2985 31.2795L54.2331 31.1819L54.188 31.0735C53.7499 30.0223 53.9106 28.9084 54.3221 27.9779C54.0636 28.0327 53.7751 28.0594 53.4565 28.0397L53.3867 28.0354L53.3178 28.023C52.861 27.9407 52.5496 27.6722 52.3712 27.4748C52.1847 27.2685 52.0472 27.0346 51.9459 26.8277C51.7417 26.4108 51.5961 25.9207 51.5027 25.4728C51.4091 25.0244 51.3516 24.5402 51.3628 24.1207C51.3682 23.9191 51.3907 23.6627 51.4707 23.4126C51.5253 23.2423 51.7096 22.7514 52.2366 22.5146C53.0403 22.0827 53.2239 21.9117 53.428 21.6973C53.4868 21.6355 53.5512 21.5645 53.6256 21.4824C53.9077 21.171 54.3337 20.7008 55.1447 19.9763C55.4346 19.6909 55.8397 19.4955 56.3118 19.5171C56.7671 19.5379 57.1142 19.753 57.3329 19.9477C57.6651 20.2433 57.8946 20.6551 57.9991 21.0834C58.8268 20.52 59.5903 19.8428 60.1307 19.1362C60.4606 18.5513 60.9887 17.6309 61.8881 17.0869C62.1037 16.9306 62.3733 16.7558 62.6327 16.5876C62.7057 16.5402 62.7779 16.4934 62.8478 16.4477C63.2142 16.2082 63.58 15.9606 63.9082 15.6985C64.2411 15.4327 64.4915 15.1859 64.6515 14.9633C64.792 14.7677 64.824 14.6455 64.8293 14.5821C64.8176 14.4643 64.7687 14.3106 64.6463 13.9642L64.6359 13.9348C64.5285 13.6317 64.3485 13.1234 64.3556 12.5651L64.356 12.5403L64.3573 12.5156C64.3779 12.134 64.4634 11.7417 64.6794 11.3888C64.9065 11.0178 65.2154 10.7918 65.508 10.6544C65.7617 10.5352 66.0198 10.4772 66.1596 10.4458L66.1702 10.4434C66.3363 10.406 66.4011 10.3911 66.4535 10.3726C66.4589 10.3604 66.4656 10.3435 66.4731 10.3211C66.5466 10.1003 66.6212 9.56403 66.4803 8.41093C66.3708 7.85092 66.2576 7.46601 66.1549 7.20974C66.0714 7.28185 65.9785 7.36772 65.8717 7.46917C65.8428 7.49654 65.8121 7.52586 65.78 7.55655C65.6313 7.6987 65.4519 7.8702 65.2816 8.01368C65.0914 8.17396 64.7737 8.42343 64.3794 8.54514C64.1615 8.61239 63.8791 8.65407 63.5659 8.58838C63.2427 8.52061 62.975 8.35688 62.7703 8.15077L62.6795 8.05927L62.6101 7.95055C62.062 7.09113 61.8755 7.03789 61.803 7.01721C61.7983 7.01585 61.794 7.01464 61.7902 7.01334C61.7672 7.00559 61.7169 6.99376 61.6438 6.97656C61.3137 6.89887 60.5177 6.71155 59.6621 6.29458L59.5867 6.25783L59.5171 6.21095C58.7674 5.70571 58.3518 4.93326 58.081 4.43004C58.0665 4.40313 58.0525 4.377 58.0388 4.35172C57.7192 3.76088 57.522 3.43638 57.2306 3.22185L57.2115 3.20778L57.1929 3.19296C56.6486 2.75795 55.8388 2.38266 55.0364 2.2364C54.2136 2.0864 53.6446 2.21476 53.3469 2.44236C52.8885 2.82164 52.8294 3.23799 52.8347 4.15138C52.835 4.20228 52.8358 4.25676 52.8367 4.31442C52.8489 5.12633 52.8705 6.5691 51.5761 7.52779C51.1588 7.83801 50.6359 8.08925 50.2008 8.2923C50.1117 8.33387 50.0247 8.37413 49.9395 8.41351C49.5672 8.58572 49.2314 8.7411 48.9194 8.91541C48.1278 9.3578 48.0889 9.59152 48.098 9.70067C48.1332 9.87947 48.1733 9.97046 48.1963 10.0108C48.2283 10.0166 48.2918 10.0232 48.4022 10.0178C48.6222 10.0072 48.8591 9.96286 49.195 9.89992C49.2617 9.88742 49.3323 9.8742 49.4074 9.86036C49.7996 9.78815 50.3389 9.69532 50.8759 9.73866L50.8931 9.74005L50.9103 9.74194C51.2837 9.78294 51.681 9.9027 52.043 10.1751C52.3572 10.4115 52.5782 10.7128 52.7382 11.0306C52.8639 11.208 52.9926 11.4265 53.0713 11.6782C53.1779 12.0188 53.1998 12.4534 52.9794 12.8809C52.7804 13.267 52.4631 13.4886 52.2317 13.6143C51.9941 13.7435 51.7314 13.8335 51.4867 13.9029C50.1124 14.2967 48.854 14.8287 47.9302 15.7037L47.9039 15.7286L47.8761 15.7519C47.611 15.9743 47.1847 16.2681 46.6846 16.3774L46.5976 16.3964L46.5089 16.4024C46.1157 16.4289 45.8627 16.4728 45.7066 16.5106C45.714 16.5429 45.7224 16.5792 45.7319 16.6203L45.7351 16.6339C45.7711 16.7895 45.8254 17.0252 45.8481 17.2766C45.8995 17.8448 45.7914 18.5868 45.1097 19.1792L45.0412 19.2387L44.9646 19.2872C44.2678 19.7285 42.7123 20.4103 41.281 20.9795C40.5437 21.2727 39.8018 21.5508 39.1646 21.7701C38.5545 21.9802 37.9642 22.1635 37.5683 22.2329L37.5492 22.2363L37.5301 22.239C36.4334 22.395 35.498 22.0697 34.7646 21.758L34.7104 21.735L34.6588 21.7068C33.769 21.2208 33.1313 21.0471 32.6573 20.9998C32.1906 20.9532 31.804 21.0204 31.3757 21.1363C31.2675 21.1656 31.1517 21.2008 31.0284 21.2383C30.186 21.4943 28.9927 21.857 27.4444 21.1797L27.3695 21.1469L27.2997 21.1043C26.6296 20.6949 26.0174 20.0306 25.5223 19.4535C25.2963 19.19 25.0951 18.9458 24.9061 18.7164C24.6274 18.3782 24.3751 18.0721 24.1084 17.7831L24.0512 17.7211L24.0032 17.6518C23.7771 17.3249 23.4244 17.1956 22.5864 16.9243C22.5721 16.9196 22.5574 16.9149 22.5424 16.9101C21.874 16.6943 20.5927 16.2808 20.2021 14.8484L20.1871 14.7934L20.1774 14.7373C20.1187 14.3978 20.139 14.0692 20.1674 13.8184C20.1914 13.6064 20.23 13.3853 20.2606 13.2097C20.2662 13.1775 20.2716 13.1469 20.2765 13.1181C20.3131 12.9055 20.3323 12.7695 20.3366 12.6692C20.337 12.6589 20.3372 12.65 20.3373 12.6424L20.3322 12.6276C20.1657 12.1479 19.5779 11.1117 18.8827 10.3888C18.5346 10.0269 18.2658 9.8568 18.1153 9.80581L18.1126 9.80852L18.0952 9.82454C18.018 9.89555 17.9205 10.0253 17.7715 10.2851C17.7406 10.339 17.7029 10.4073 17.6605 10.4841C17.5487 10.6869 17.4038 10.9496 17.2624 11.1665C16.9221 11.7247 16.4783 12.14 15.899 12.3417C15.3557 12.5309 14.8456 12.4718 14.5536 12.4328C14.0341 12.3634 13.941 12.3569 13.8974 12.3853C13.8234 12.4624 13.7793 12.5514 13.6488 12.8149C13.6189 12.8752 13.5845 12.9447 13.5442 13.0252C13.3694 13.3744 13.0443 13.9956 12.3409 14.3628M12.3409 14.3628C12.3408 14.3629 12.3406 14.363 12.3404 14.363L11.7854 13.2991L12.3415 14.3625C12.3413 14.3626 12.3411 14.3627 12.3409 14.3628ZM1.43713 23.9052C1.43729 23.9052 1.43836 23.9077 1.43982 23.9125C1.43769 23.9075 1.43696 23.9051 1.43713 23.9052ZM41.5031 51.1648C41.5032 51.1648 41.5046 51.1655 41.507 51.1668C41.5042 51.1655 41.503 51.1649 41.5031 51.1648ZM66.4391 10.4001C66.439 10.4001 66.4396 10.3992 66.4408 10.3977C66.4398 10.3993 66.4392 10.4 66.4391 10.4001ZM48.1695 10.0042C48.1695 10.0042 48.1702 10.0044 48.1714 10.0049L48.1695 10.0042ZM48.2094 10.0314C48.2136 10.0354 48.2154 10.0378 48.2152 10.038C48.2151 10.0382 48.213 10.0362 48.2094 10.0314ZM20.3363 12.6087C20.3363 12.6087 20.3365 12.6102 20.3368 12.6135C20.3363 12.6104 20.3362 12.6088 20.3363 12.6087Z" stroke="#F7A400" strokeWidth="2.4" />
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <h2 className="count"><CounterUp count={19} />+</h2>
                                        <p>All Over The World <br /> We Are Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </ >
    )
}
