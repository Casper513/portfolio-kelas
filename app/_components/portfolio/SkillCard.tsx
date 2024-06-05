import React from 'react';

export interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface SkillCardComponentProps {
  data: SkillCardProps;
}

const SkillCard: React.FC<SkillCardComponentProps> = ({ data }) => {
  const { title, description, icon } = data;
  return (
    <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]" tabIndex={-1}>
      <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
        <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
          {icon}
        </div>
        <p className="text-base font-semibold">{title}</p>
      </div>
      <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
        <p className="font-normal text-base text-default-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
