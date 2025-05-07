import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const App = () => {
  const [step, setStep] = useState(0);
  const script = [
    {
      phrase: "Доброго дня! Чи можу я поставити вам кілька питань?",
      responses: ["Так", "Ні"],
    },
    {
      phrase: "Дякую! Питання №1: Вам зручно зараз говорити?",
      responses: ["Так", "Ні"],
    },
    {
      phrase: "Чудово! Гарного дня!",
      responses: ["Завершити"],
    },
  ];

  const nextStep = () => {
    if (step < script.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center gap-4">
      <Card className="w-full max-w-md text-center">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">{script[step].phrase}</h2>
          <div className="flex flex-col gap-2">
            {script[step].responses.map((res, idx) => (
              <Button key={idx} onClick={nextStep}>
                {res}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
