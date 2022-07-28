import s from './style.module.scss';
import {useState} from "react";

export const Slider = () => {
    const [move, setMove] = useState({transform: 'translateX(0px)'});
    const [transform, setTransform] = useState(0);


    const switcher = (e: boolean) => {
        let shift = transform;
        if(!!e){
            if(shift > 0){
                shift -= 400;
                setTransform(shift);
            }
        }else if(shift < 1200){
            shift += 400;
            setTransform(shift);
        }
        setMove({
            ...move, transform: `translateX(-${shift}px)`
        })
        console.log(shift)
    }

    return <>
        <div className={s.body}>
            <button className={s.button + ' ' + s.left}
            onClick={() => switcher(true)}
            >{'>'}</button>
            <div className={s.slider} >
                <div className={s.sliderLine} style={move}>
                    <img src={'https://avatars.mds.yandex.net/i?id=2a0000018240d5a608c1066606b949ef8576-1735627-fast-images&n=13&exp=1'} className={s.item}></img>
                    <img src={'https://avatars.mds.yandex.net/i?id=2a0000018240d5a608c1066606b949ef8576-1735627-fast-images&n=13&exp=1'} className={s.item}></img>
                    <img src={'https://avatars.mds.yandex.net/i?id=2a000001823acd80ba5416ddac568b2528ad-1392821-fast-images&n=13&exp=1'} className={s.item}></img>
                    <img src={'https://avatars.mds.yandex.net/i?id=2a00000182418c3120b3565901923a70cf94-1714228-fast-images&n=13&exp=1'} className={s.item}></img>
                    <img src={'https://avatars.mds.yandex.net/i?id=2a0000018226e40a3b8c4ace12c0e3b73e9c-1553916-fast-images&n=13&exp=1'} className={s.item}></img>
                    <img src={'https://avatars.mds.yandex.net/i?id=2a000001823ee2a9f72c042b3245ca87fc6e-469746-fast-images&n=13&exp=1'} className={s.item}></img>
                    <img src={'https://avatars.mds.yandex.net/i?id=76563326e6986e14c2a3318f1b173c00-4633509-images-thumbs&n=13&exp=1'} className={s.item}></img>
                    <img src={'https://avatars.mds.yandex.net/i?id=2a000001823ec567459aa59aacf3b1b95e88-399069-fast-images&n=13&exp=1'} className={s.item}></img>
                    <img src={'https://yandex-images.clstorage.net/5cS6c1t33/92788fnSEh1/p_O1t68U6hgwcoyLJ92VLqENdCPNEoaBbJ-isQgZ4z7zXDdJkbfhdgWt_g_FPA2BQvOXkqDUw_UqzJPj9A8bZnHjIKc_lCjZcGQZiScc1an2X3UlmsYS1HncJ7EfSeHroUx2CUtsvCrZdCCWWzSSnsQnAMa1RIWnugIdpnGbSPzmtvS2bU3rm7wqgY7hnp_m_sVwbhqYlwmrzbo8loE9IC8FYdwIqfbkkv3u2lJ4UZgJ7UIBvYMQYbeIVrhwF4M4o74w8aDCoB15ZUbArlqVpDaIvuhS3tRCLgW28teI_WmtxigWSaUxYlIyptDddhwfwKoChjdMlyV0BxM3sN6DcW51sD9gBODZeejByqrSku4zzPXqnp1czSiCvfXdS_UhZwyqkICtcGefuKbRXX7dUcYni4v_Rp2i_UfQ_zFTQXSn-nQ_4s8k0H7gDkLhEN3j-Y_zKhZRE0mgyjO62E02ZGyM6B7H57dhGP8n0pq31dfMJw-CMA8SI_2GFPM41wnxKbe1fW2NYto25EzCrZRW6biEOy6clRHAa82wOpmEPSlizSdcyed-q9M2r9dSMFEfD-4OBHeG2m57A1o9tRFIs-36OXDmQW2QdCeCTm1anewxSznjmpFZimsIejuZRzwkpc0sU4HndeHbfm3SF3tRmMFrR0W6gtzgM88TM7iew3ZssDQy7satk_zjCwDtntVr-wZ-ZxsVU8vgC7KxFkt66qQK5Z4K4LBiVLNgl1C3HNCI4UZHek9abbsMmvrxlo5yITi8ca7KKl19aADJ4JGQ6r4Mfi9Q0VKJ5Inz-NgD-6krCiifR242Y5J26x-Yt5wRxyRPBbeBkuD9TpL1dRiFday0N_YvAqJZtiwDBSBVnqb3RTcsU5hSQaeK833Qzv0hLobhmEXhOGaTc2OfUDdRlEdizUY1hJ9pPAQXv_lSBX2u8j91pkXgUvwpiwMv15ShcQc84FdZ0QFmhXC1FQ'} className={s.item}></img>
                    <img src={'https://avatars.mds.yandex.net/i?id=2a00000182356441aab2fd364eb04a55ff3e-1541714-fast-images&n=13&exp=1'} className={s.item}></img>
                </div>

            </div>
            <button className={s.button + ' ' + s.right}
                    onClick={() => switcher(false)}
            >{'<'}</button>
        </div>
    </>
}