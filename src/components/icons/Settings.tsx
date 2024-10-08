import React from "react";
interface SettingsProps {
  className?: string;
}
// width="20"      height="20"
const Settings: React.FC<SettingsProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="2.69394"
        cy="2.7"
        rx="2.69394"
        ry="2.7"
        transform="matrix(-1 0 0 1 12.6943 7.2998)"
        stroke="black"
        stroke-width="2"
      />
      <path
        d="M14.0409 3.64365L14.5417 2.77811V2.77811L14.0409 3.64365ZM14.0412 16.3558L14.5421 17.2214H14.5421L14.0412 16.3558ZM5.95969 16.356L5.45885 17.2216H5.45885L5.95969 16.356ZM5.95905 3.6437L5.4582 2.77816L5.4582 2.77816L5.95905 3.6437ZM7.22365 1.96796L8.19319 2.21291L7.22365 1.96796ZM1.88396 7.95736L2.53908 7.20184L1.88396 7.95736ZM4.05144 16.0535L4.26055 17.0314L4.05144 16.0535ZM3.14081 15.8088L2.37658 16.4538L3.14081 15.8088ZM7.22438 18.0321L6.25481 18.2769L7.22438 18.0321ZM12.1548 18.7392L11.9151 17.7684L12.1548 18.7392ZM18.4589 6.97173L17.5169 7.30747L18.4589 6.97173ZM18.116 7.95725L17.4609 7.20168L18.116 7.95725ZM1.54121 13.0282L0.599254 13.3639L1.54121 13.0282ZM15.9487 3.94625L15.7397 2.96832L15.9487 3.94625ZM16.8591 4.191L16.0949 4.83597L16.8591 4.191ZM18.116 12.0428L17.4609 12.7984L18.116 12.0428ZM18.4588 13.0284L19.4008 13.3641L18.4588 13.0284ZM12.7763 1.96792L13.7458 1.72297L12.7763 1.96792ZM11.8067 2.21287C12.0423 3.1452 12.6407 3.98879 13.54 4.50919L14.5417 2.77811C14.1293 2.53945 13.8549 2.15459 13.7458 1.72297L11.8067 2.21287ZM13.54 4.50919C14.3632 4.9855 15.2959 5.10829 16.1576 4.92418L15.7397 2.96832C15.3441 3.05286 14.9197 2.99681 14.5417 2.77811L13.54 4.50919ZM19.4008 6.63599C18.9943 5.49559 18.3875 4.45147 17.6233 3.54604L16.0949 4.83597C16.707 5.56125 17.1922 6.39656 17.5169 7.30747L19.4008 6.63599ZM18.1837 10C18.1837 9.48556 18.4101 9.02577 18.7711 8.71282L17.4609 7.20168C16.6798 7.87891 16.1837 8.88225 16.1837 10H18.1837ZM18.7711 11.2873C18.4101 10.9743 18.1837 10.5145 18.1837 10H16.1837C16.1837 11.1178 16.6798 12.1212 17.4609 12.7984L18.7711 11.2873ZM17.6239 16.4534C18.3877 15.5481 18.9944 14.5042 19.4008 13.3641L17.5169 12.6926C17.1923 13.6033 16.7072 14.4384 16.0953 15.1636L17.6239 16.4534ZM14.5421 17.2214C14.92 17.0027 15.3444 16.9466 15.7401 17.0312L16.158 15.0753C15.2963 14.8912 14.3635 15.014 13.5404 15.4903L14.5421 17.2214ZM13.7461 18.2767C13.8551 17.845 14.1295 17.4601 14.5421 17.2214L13.5404 15.4903C12.6409 16.0108 12.0424 16.8546 11.807 17.7871L13.7461 18.2767ZM10 20C10.8242 20 11.6264 19.8997 12.3944 19.7101L11.9151 17.7684C11.3026 17.9196 10.6614 18 10 18V20ZM7.60666 19.7103C8.37443 19.8998 9.17624 20 10 20V18C9.33898 18 8.698 17.9196 8.08575 17.7686L7.60666 19.7103ZM5.45885 17.2216C5.87137 17.4603 6.1458 17.8452 6.25481 18.2769L8.19394 17.7873C7.95847 16.8547 7.36001 16.011 6.46053 15.4905L5.45885 17.2216ZM4.26055 17.0314C4.65631 16.9468 5.08082 17.0028 5.45885 17.2216L6.46053 15.4905C5.63719 15.0141 4.70423 14.8913 3.84233 15.0756L4.26055 17.0314ZM0.599254 13.3639C1.0057 14.5043 1.61249 15.5483 2.37658 16.4538L3.90504 15.1639C3.29297 14.4386 2.80782 13.6033 2.48317 12.6924L0.599254 13.3639ZM1.81617 10C1.81617 10.5145 1.58976 10.9742 1.22885 11.2872L2.53911 12.7982C3.32011 12.121 3.81617 11.1177 3.81617 10H1.81617ZM1.22884 8.71289C1.58975 9.02584 1.81617 9.4856 1.81617 10H3.81617C3.81617 8.88234 3.3201 7.87907 2.53908 7.20184L1.22884 8.71289ZM2.37667 3.54613C1.61252 4.45159 1.00568 5.49574 0.599222 6.63618L2.48314 7.30762C2.80781 6.39668 3.293 5.56135 3.90511 4.83604L2.37667 3.54613ZM5.4582 2.77816C5.08028 2.99685 4.6559 3.05291 4.26023 2.96838L3.84241 4.92425C4.70411 5.10833 5.63677 4.98553 6.45989 4.50924L5.4582 2.77816ZM6.25412 1.72302C6.14507 2.15463 5.87066 2.53949 5.4582 2.77816L6.45989 4.50924C7.35922 3.98884 7.95764 3.14525 8.19319 2.21291L6.25412 1.72302ZM10 0C9.17591 0 8.37379 0.100313 7.60574 0.289891L8.08502 2.23162C8.69749 2.08044 9.33872 2 10 2V0ZM12.3941 0.289841C11.6262 0.100296 10.8241 0 10 0V2C10.6613 2 11.3025 2.08042 11.9149 2.23158L12.3941 0.289841ZM8.19319 2.21291C8.19806 2.19364 8.20401 2.17828 8.20914 2.16772C8.21431 2.15707 8.21671 2.15523 8.21297 2.15976C8.20901 2.16454 8.19698 2.17778 8.17429 2.19283C8.15063 2.20851 8.12006 2.22297 8.08502 2.23162L7.60574 0.289891C6.78566 0.492313 6.38755 1.19489 6.25412 1.72302L8.19319 2.21291ZM2.53908 7.20184C2.52187 7.18691 2.50845 7.17185 2.4993 7.15931C2.49005 7.14664 2.48856 7.14124 2.49028 7.1457C2.49214 7.15053 2.49848 7.16907 2.49977 7.19993C2.50114 7.23248 2.49641 7.2704 2.48314 7.30762L0.599222 6.63618C0.278298 7.53662 0.776863 8.32097 1.22884 8.71289L2.53908 7.20184ZM3.84233 15.0756C3.82268 15.0798 3.80606 15.0813 3.79413 15.0814C3.78209 15.0815 3.77919 15.0801 3.78473 15.0814C3.79059 15.0828 3.80762 15.0877 3.83103 15.1013C3.85544 15.1155 3.88184 15.1364 3.90504 15.1639L2.37658 16.4538C2.92152 17.0995 3.72796 17.1453 4.26055 17.0314L3.84233 15.0756ZM8.08575 17.7686C8.12079 17.7772 8.15138 17.7917 8.17504 17.8074C8.19774 17.8224 8.20976 17.8356 8.21372 17.8404C8.21747 17.845 8.21506 17.8431 8.20989 17.8325C8.20476 17.8219 8.19881 17.8065 8.19394 17.7873L6.25481 18.2769C6.3882 18.8052 6.78637 19.5079 7.60666 19.7103L8.08575 17.7686ZM11.807 17.7871C11.8021 17.8063 11.7961 17.8217 11.791 17.8323C11.7858 17.8429 11.7834 17.8448 11.7872 17.8402C11.7911 17.8355 11.8032 17.8222 11.8259 17.8072C11.8495 17.7915 11.8801 17.777 11.9151 17.7684L12.3944 19.7101C13.2146 19.5076 13.6127 18.8049 13.7461 18.2767L11.807 17.7871ZM16.0953 15.1636C16.1185 15.1361 16.1449 15.1151 16.1693 15.101C16.1927 15.0874 16.2098 15.0825 16.2156 15.0811C16.2212 15.0798 16.2183 15.0812 16.2062 15.0811C16.1943 15.081 16.1777 15.0795 16.158 15.0753L15.7401 17.0312C16.2727 17.145 17.079 17.099 17.6239 16.4534L16.0953 15.1636ZM17.5169 7.30747C17.5036 7.27025 17.4989 7.23233 17.5003 7.19977C17.5016 7.1689 17.5079 7.15037 17.5098 7.14553C17.5115 7.14108 17.51 7.14648 17.5007 7.15916C17.4916 7.17169 17.4782 7.18676 17.4609 7.20168L18.7711 8.71282C19.2231 8.32091 19.7218 7.5365 19.4008 6.63599L17.5169 7.30747ZM2.48317 12.6924C2.49643 12.7297 2.50116 12.7676 2.4998 12.8001C2.49851 12.831 2.49217 12.8495 2.4903 12.8544C2.48859 12.8588 2.49008 12.8534 2.49933 12.8408C2.50848 12.8282 2.5219 12.8132 2.53911 12.7982L1.22885 11.2872C0.776878 11.6791 0.278321 12.4635 0.599254 13.3639L2.48317 12.6924ZM16.1576 4.92418C16.1773 4.91998 16.1939 4.9185 16.2058 4.91843C16.2178 4.91835 16.2208 4.91971 16.2152 4.9184C16.2093 4.91701 16.1923 4.91215 16.1689 4.89855C16.1445 4.88436 16.1181 4.86345 16.0949 4.83597L17.6233 3.54604C17.0785 2.90046 16.2723 2.85454 15.7397 2.96832L16.1576 4.92418ZM3.90511 4.83604C3.88192 4.86352 3.85552 4.88444 3.83113 4.89862C3.80772 4.91222 3.79069 4.91708 3.78483 4.91847C3.77929 4.91979 3.78219 4.91842 3.79422 4.9185C3.80615 4.91857 3.82276 4.92005 3.84241 4.92425L4.26023 2.96838C3.72773 2.85462 2.92149 2.90056 2.37667 3.54613L3.90511 4.83604ZM17.4609 12.7984C17.4781 12.8133 17.4916 12.8284 17.5007 12.8409C17.51 12.8536 17.5115 12.859 17.5097 12.8545C17.5079 12.8497 17.5015 12.8312 17.5002 12.8003C17.4989 12.7677 17.5036 12.7298 17.5169 12.6926L19.4008 13.3641C19.7218 12.4636 19.2231 11.6792 18.7711 11.2873L17.4609 12.7984ZM13.7458 1.72297C13.6124 1.19484 13.2143 0.492249 12.3941 0.289841L11.9149 2.23158C11.8799 2.22293 11.8493 2.20847 11.8256 2.19279C11.8029 2.17774 11.7909 2.1645 11.787 2.15972C11.7832 2.15519 11.7856 2.15703 11.7908 2.16768C11.7959 2.17824 11.8019 2.1936 11.8067 2.21287L13.7458 1.72297Z"
        fill="black"
      />
    </svg>
  );
};

export default Settings;
