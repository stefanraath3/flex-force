import svgPaths from "./svg-euxaiio5pu";
import imgUserThumb from "@/assets/d6cf503f4b7d765040bde8bd6c70be7edbd7a847.png";

function Frame() {
  return (
    <div className="bg-[#e4e4e7] content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#3f3f46] text-[12px] w-full whitespace-pre-wrap">
        6
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle
            cx="4"
            cy="4"
            fill="var(--fill-0, #71717A)"
            id="Ellipse 2"
            r="4"
          />
        </svg>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[#27272a] text-[14px]">
        Shortlisted
      </p>
      <Frame />
    </div>
  );
}

function JobsIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Jobs Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Jobs Icon">
          <path
            d={svgPaths.p14222300}
            id="Icon"
            stroke="var(--stroke-0, #52525B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function KanbanHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Kanban Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[4px] relative w-full">
          <Frame1 />
          <JobsIcon />
        </div>
      </div>
    </div>
  );
}

function UserThumb() {
  return (
    <div
      className="relative rounded-[60px] shrink-0 size-[38px]"
      data-name="User Thumb"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[60px] size-full"
        src={imgUserThumb}
      />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#27272a] text-[14px]">
        Maria Antoinette
      </p>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#71717a] text-[12px]">
        maria@gmail.com
      </p>
    </div>
  );
}

function UserDetails() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
      data-name="User Details"
    >
      <UserThumb />
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#c6fffb] content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#3f3f46] text-[12px]">
        97% match
      </p>
    </div>
  );
}

function Flag() {
  return (
    <div
      className="absolute h-[13px] left-[-3px] top-[-1px] w-[19px]"
      data-name="flag"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 13"
      >
        <g id="flag">
          <path
            clipRule="evenodd"
            d="M3 1H19V13H3V1Z"
            fill="var(--fill-0, #E31D1C)"
            fillRule="evenodd"
            id="middle"
          />
          <path
            d={svgPaths.p2b02ca00}
            fill="var(--fill-0, #F7FCFF)"
            id="Combined Shape"
          />
          <rect
            fill="var(--fill-0, #2E42A5)"
            height="7"
            id="Rectangle 82"
            width="9"
            x="3"
            y="1"
          />
          <path
            d={svgPaths.p14d2bc00}
            fill="var(--fill-0, #F7FCFF)"
            id="Stars"
          />
        </g>
      </svg>
    </div>
  );
}

function Flags() {
  return (
    <div
      className="bg-white h-[12px] overflow-clip relative rounded-[2px] shrink-0 w-[16px]"
      data-name="Flags"
    >
      <Flag />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <Flags />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#52525b] text-[12px]">
        United States
      </p>
    </div>
  );
}

function StatusPill() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
      data-name="Status Pill"
    >
      <Frame2 />
      <Frame7 />
    </div>
  );
}

function Card() {
  return (
    <div
      className="bg-white relative rounded-[12px] shrink-0 w-[244px]"
      data-name="Card"
    >
      <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip p-[10px] relative rounded-[inherit] w-full">
        <UserDetails />
        <StatusPill />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#9440ff] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_6px_15px_-2px_rgba(16,24,40,0.08),0px_6px_15px_-2px_rgba(16,24,40,0.08)]"
      />
    </div>
  );
}

function UserThumb1() {
  return (
    <div
      className="relative rounded-[60px] shrink-0 size-[38px]"
      data-name="User Thumb"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[60px] size-full"
        src={imgUserThumb}
      />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#27272a] text-[14px]">
        Maria Antoinette
      </p>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#71717a] text-[12px]">
        maria@gmail.com
      </p>
    </div>
  );
}

function UserDetails1() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
      data-name="User Details"
    >
      <UserThumb1 />
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#c6fffb] content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#3f3f46] text-[12px]">
        97% match
      </p>
    </div>
  );
}

function Flag1() {
  return (
    <div
      className="absolute h-[13px] left-[-3px] top-[-1px] w-[19px]"
      data-name="flag"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 13"
      >
        <g id="flag">
          <path
            clipRule="evenodd"
            d="M3 1H19V13H3V1Z"
            fill="var(--fill-0, #E31D1C)"
            fillRule="evenodd"
            id="middle"
          />
          <path
            d={svgPaths.p2b02ca00}
            fill="var(--fill-0, #F7FCFF)"
            id="Combined Shape"
          />
          <rect
            fill="var(--fill-0, #2E42A5)"
            height="7"
            id="Rectangle 82"
            width="9"
            x="3"
            y="1"
          />
          <path
            d={svgPaths.p14d2bc00}
            fill="var(--fill-0, #F7FCFF)"
            id="Stars"
          />
        </g>
      </svg>
    </div>
  );
}

function Flags1() {
  return (
    <div
      className="bg-white h-[12px] overflow-clip relative rounded-[2px] shrink-0 w-[16px]"
      data-name="Flags"
    >
      <Flag1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <Flags1 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#52525b] text-[12px]">
        United States
      </p>
    </div>
  );
}

function StatusPill1() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
      data-name="Status Pill"
    >
      <Frame5 />
      <Frame9 />
    </div>
  );
}

function Card1() {
  return (
    <div
      className="bg-white relative rounded-[12px] shrink-0 w-[244px]"
      data-name="Card"
    >
      <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip p-[10px] relative rounded-[inherit] w-full">
        <UserDetails1 />
        <StatusPill1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
    </div>
  );
}

function UserThumb2() {
  return (
    <div
      className="relative rounded-[60px] shrink-0 size-[38px]"
      data-name="User Thumb"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[60px] size-full"
        src={imgUserThumb}
      />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#27272a] text-[14px]">
        Maria Antoinette
      </p>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#71717a] text-[12px]">
        maria@gmail.com
      </p>
    </div>
  );
}

function UserDetails2() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
      data-name="User Details"
    >
      <UserThumb2 />
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#c6fffb] content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#3f3f46] text-[12px]">
        97% match
      </p>
    </div>
  );
}

function Flag2() {
  return (
    <div
      className="absolute h-[13px] left-[-3px] top-[-1px] w-[19px]"
      data-name="flag"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 13"
      >
        <g id="flag">
          <path
            clipRule="evenodd"
            d="M3 1H19V13H3V1Z"
            fill="var(--fill-0, #E31D1C)"
            fillRule="evenodd"
            id="middle"
          />
          <path
            d={svgPaths.p2b02ca00}
            fill="var(--fill-0, #F7FCFF)"
            id="Combined Shape"
          />
          <rect
            fill="var(--fill-0, #2E42A5)"
            height="7"
            id="Rectangle 82"
            width="9"
            x="3"
            y="1"
          />
          <path
            d={svgPaths.p14d2bc00}
            fill="var(--fill-0, #F7FCFF)"
            id="Stars"
          />
        </g>
      </svg>
    </div>
  );
}

function Flags2() {
  return (
    <div
      className="bg-white h-[12px] overflow-clip relative rounded-[2px] shrink-0 w-[16px]"
      data-name="Flags"
    >
      <Flag2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <Flags2 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#52525b] text-[12px]">
        United States
      </p>
    </div>
  );
}

function StatusPill2() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
      data-name="Status Pill"
    >
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Card2() {
  return (
    <div
      className="bg-white relative rounded-[12px] shrink-0 w-[244px]"
      data-name="Card"
    >
      <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip p-[10px] relative rounded-[inherit] w-full">
        <UserDetails2 />
        <StatusPill2 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
    </div>
  );
}

function UserThumb3() {
  return (
    <div
      className="relative rounded-[60px] shrink-0 size-[38px]"
      data-name="User Thumb"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[60px] size-full"
        src={imgUserThumb}
      />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#27272a] text-[14px]">
        Maria Antoinette
      </p>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#71717a] text-[12px]">
        maria@gmail.com
      </p>
    </div>
  );
}

function UserDetails3() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
      data-name="User Details"
    >
      <UserThumb3 />
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#c6fffb] content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#3f3f46] text-[12px]">
        97% match
      </p>
    </div>
  );
}

function Flag3() {
  return (
    <div
      className="absolute h-[13px] left-[-3px] top-[-1px] w-[19px]"
      data-name="flag"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 13"
      >
        <g id="flag">
          <path
            clipRule="evenodd"
            d="M3 1H19V13H3V1Z"
            fill="var(--fill-0, #E31D1C)"
            fillRule="evenodd"
            id="middle"
          />
          <path
            d={svgPaths.p2b02ca00}
            fill="var(--fill-0, #F7FCFF)"
            id="Combined Shape"
          />
          <rect
            fill="var(--fill-0, #2E42A5)"
            height="7"
            id="Rectangle 82"
            width="9"
            x="3"
            y="1"
          />
          <path
            d={svgPaths.p14d2bc00}
            fill="var(--fill-0, #F7FCFF)"
            id="Stars"
          />
        </g>
      </svg>
    </div>
  );
}

function Flags3() {
  return (
    <div
      className="bg-white h-[12px] overflow-clip relative rounded-[2px] shrink-0 w-[16px]"
      data-name="Flags"
    >
      <Flag3 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <Flags3 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#52525b] text-[12px]">
        United States
      </p>
    </div>
  );
}

function StatusPill3() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
      data-name="Status Pill"
    >
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Card3() {
  return (
    <div
      className="bg-white relative rounded-[12px] shrink-0 w-[244px]"
      data-name="Card"
    >
      <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip p-[10px] relative rounded-[inherit] w-full">
        <UserDetails3 />
        <StatusPill3 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
    </div>
  );
}

function UserThumb4() {
  return (
    <div
      className="relative rounded-[60px] shrink-0 size-[38px]"
      data-name="User Thumb"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[60px] size-full"
        src={imgUserThumb}
      />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#27272a] text-[14px]">
        Maria Antoinette
      </p>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#71717a] text-[12px]">
        maria@gmail.com
      </p>
    </div>
  );
}

function UserDetails4() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
      data-name="User Details"
    >
      <UserThumb4 />
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#c6fffb] content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#3f3f46] text-[12px]">
        97% match
      </p>
    </div>
  );
}

function Flag4() {
  return (
    <div
      className="absolute h-[13px] left-[-3px] top-[-1px] w-[19px]"
      data-name="flag"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 13"
      >
        <g id="flag">
          <path
            clipRule="evenodd"
            d="M3 1H19V13H3V1Z"
            fill="var(--fill-0, #E31D1C)"
            fillRule="evenodd"
            id="middle"
          />
          <path
            d={svgPaths.p2b02ca00}
            fill="var(--fill-0, #F7FCFF)"
            id="Combined Shape"
          />
          <rect
            fill="var(--fill-0, #2E42A5)"
            height="7"
            id="Rectangle 82"
            width="9"
            x="3"
            y="1"
          />
          <path
            d={svgPaths.p14d2bc00}
            fill="var(--fill-0, #F7FCFF)"
            id="Stars"
          />
        </g>
      </svg>
    </div>
  );
}

function Flags4() {
  return (
    <div
      className="bg-white h-[12px] overflow-clip relative rounded-[2px] shrink-0 w-[16px]"
      data-name="Flags"
    >
      <Flag4 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <Flags4 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#52525b] text-[12px]">
        United States
      </p>
    </div>
  );
}

function StatusPill4() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
      data-name="Status Pill"
    >
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Card4() {
  return (
    <div
      className="bg-white relative rounded-[12px] shrink-0 w-[244px]"
      data-name="Card"
    >
      <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip p-[10px] relative rounded-[inherit] w-full">
        <UserDetails4 />
        <StatusPill4 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
    </div>
  );
}

function UserThumb5() {
  return (
    <div
      className="relative rounded-[60px] shrink-0 size-[38px]"
      data-name="User Thumb"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[60px] size-full"
        src={imgUserThumb}
      />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#27272a] text-[14px]">
        Maria Antoinette
      </p>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#71717a] text-[12px]">
        maria@gmail.com
      </p>
    </div>
  );
}

function UserDetails5() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
      data-name="User Details"
    >
      <UserThumb5 />
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#c6fffb] content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#3f3f46] text-[12px]">
        97% match
      </p>
    </div>
  );
}

function Flag5() {
  return (
    <div
      className="absolute h-[13px] left-[-3px] top-[-1px] w-[19px]"
      data-name="flag"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 13"
      >
        <g id="flag">
          <path
            clipRule="evenodd"
            d="M3 1H19V13H3V1Z"
            fill="var(--fill-0, #E31D1C)"
            fillRule="evenodd"
            id="middle"
          />
          <path
            d={svgPaths.p2b02ca00}
            fill="var(--fill-0, #F7FCFF)"
            id="Combined Shape"
          />
          <rect
            fill="var(--fill-0, #2E42A5)"
            height="7"
            id="Rectangle 82"
            width="9"
            x="3"
            y="1"
          />
          <path
            d={svgPaths.p14d2bc00}
            fill="var(--fill-0, #F7FCFF)"
            id="Stars"
          />
        </g>
      </svg>
    </div>
  );
}

function Flags5() {
  return (
    <div
      className="bg-white h-[12px] overflow-clip relative rounded-[2px] shrink-0 w-[16px]"
      data-name="Flags"
    >
      <Flag5 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <Flags5 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#52525b] text-[12px]">
        United States
      </p>
    </div>
  );
}

function StatusPill5() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
      data-name="Status Pill"
    >
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Card5() {
  return (
    <div
      className="bg-white relative rounded-[12px] shrink-0 w-[244px]"
      data-name="Card"
    >
      <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip p-[10px] relative rounded-[inherit] w-full">
        <UserDetails5 />
        <StatusPill5 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function JobsIcon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Jobs Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Jobs Icon">
          <path
            d="M10 6L10 14M14 10L6 10"
            id="Icon"
            stroke="var(--stroke-0, #52525B)"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <JobsIcon1 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[#27272a] text-[14px]">
        Add Applicant
      </p>
    </div>
  );
}

function KanbanHeader1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Kanban Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[4px] relative w-full">
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

export default function KanbanColumn() {
  return (
    <div
      className="bg-[#f4f4f5] content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[10px] relative rounded-[16px] size-full"
      data-name="Kanban Column"
    >
      <KanbanHeader />
      <Frame8 />
      <KanbanHeader1 />
    </div>
  );
}
