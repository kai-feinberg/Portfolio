import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { PiggyBank, Pickaxe, Trophy, Vote, Hammer, Laptop } from 'lucide-react';

export default function Education() {
    return (
        <div className='flex flex-row justify-center gap-10'>

            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>
                        <div className="flex flex-row justify-between">
                            <p>Northwestern</p>
                            <p className='text-base font-normal'>2025</p>
                        </div>
                        <p className='text-base font-normal mt-2'>GPA 3.83</p>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {/* <p className='text-lg font-medium'>
                        Masters in Computer Science
                    </p>
                    <p className='text-lg font-medium'>
                        Bachelors in Design Engineering
                    </p> */}
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="rounded-md p-2 flex items-center justify-center">
                                <Laptop className="w-7 h-7 text-card-foreground" />
                            </div>
                            <div>
                                <div className="font-medium">MS in Computer Science</div>
                                <div className="text-sm text-muted-foreground">Concentration in ______</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="rounded-md p-2 flex items-center justify-center">
                                <Hammer className="w-6 h-6 text-card-foreground" />
                            </div>
                            <div>
                                <div className="font-medium">BS in Design Engineering </div>
                                <div className="text-sm text-muted-foreground">Building products to solve problems</div>
                            </div>
                        </div>


                    </div>
                </CardContent>
            </Card>

            <Card className="w-full max-w-md p-6 grid gap-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Achievements</h2>
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Trophy className="w-5 h-5" />

                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="rounded-md p-2 flex items-center justify-center">
                            <PiggyBank className="w-7 h-7 text-card-foreground" />
                        </div>
                        <div>
                            <div className="font-medium">$7k Hackathon winnings</div>
                            <div className="text-sm text-muted-foreground">1st place finish in Mega Hacks 2022</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="rounded-md p-2 flex items-center justify-center">
                            <Vote className="w-6 h-6 text-card-foreground" />
                        </div>
                        <div>
                            <div className="font-medium">2nd Place on Web3 Product Launch </div>
                            <div className="text-sm text-muted-foreground">700+ upvotes in Smoothie.so</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="rounded-md p-2 flex items-center justify-center">
                            <Pickaxe className="w-6 h-6 text-card-foreground" />
                        </div>
                        <div>
                            <div className="font-medium">2x Founder</div>
                            <div className="text-sm text-muted-foreground">Solo founder of 2 startups</div>
                        </div>
                    </div>

                </div>
            </Card>
        </div>

    );
}