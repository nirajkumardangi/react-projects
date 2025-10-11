import { CheckCircle2 } from "lucide-react";

function Button({btnName }) {
  return (
    <button className='px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-2 bg-white/20 text-white border-2 border-white/30 hover:bg-white/30'>
    <CheckCircle2 className='w-5 h-5' />
      {btnName}
    </button>
  );
}

export default Button;
