import React from 'react';

export type HelloWorldProps = { name: string };

const HelloWorld: React.FC<HelloWorldProps> = ({ name }: HelloWorldProps) => {
    return (
        <div className="px-20">
            <div className="h-56 grid grid-cols-3 gap-4 content-center">
                <p className="bg-teal-200 text-white text-center">
                    Hello {name}
                </p>
                <p className="bg-teal-300 text-white text-center">
                    Hello {name}
                </p>
                <p className="bg-teal-400 text-white text-center">
                    Hello {name}
                </p>
                <p className="bg-teal-500 text-white text-center">
                    Hello {name}
                </p>
                <p className="bg-teal-600 text-white text-center">
                    Hello {name}
                </p>
                <p className="bg-teal-700 text-white text-center">
                    Hello {name}
                </p>
            </div>
        </div>
    );
};

export default HelloWorld;
