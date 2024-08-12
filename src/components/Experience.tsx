import { LinkPreview } from "./ui/link-preview";
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mountain } from "lucide-react";
import { Separator } from "./ui/separator";

export default function Experience() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <p>Experience</p>
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1 gap-4">
                        <Separator className="bg-black" />

                        <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4 rounded-lg">
                            <div className="rounded-md p-2 flex items-center justify-center">
                                <Mountain className="w-6 h-6 text-card-foreground" />
                            </div>
                            <div>
                                <div className="font-medium">
                                <LinkPreview url="https://trailmix.cash/">
                                        TrailMix.cash
                                    </LinkPreview>                              
                                </div>
                                <div className="text-sm text-muted-foreground">Founder</div>
                            </div>
                        </div>
                        <Separator className="bg-black" />

                        <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4 rounded-lg">
                            <div className="rounded-xl p-2 flex items-center justify-center">
                                <Mountain className="w-7 h-7 text-card-foreground" />
                            </div>
                            <div>
                                <div className="font-medium">
                                    <LinkPreview url="https://scoutprotocol.xyz/">
                                        JoinFire.xyz
                                    </LinkPreview>
                                </div>
                                <div className="text-sm text-muted-foreground">Product intern</div>
                            </div>
                        </div>
                        <Separator className="bg-black" />
                        <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4 rounded-lg">
                            <div className="rounded-md p-2 flex items-center justify-center">
                                <Mountain className="w-6 h-6 text-card-foreground" />
                            </div>
                            <div>
                                <div className="font-medium">

                                    <LinkPreview url="https://scoutprotocol.xyz/">Scout Protocol</LinkPreview>
                                </div>
                                <div className="text-sm text-muted-foreground">Founder</div>
                            </div>
                        </div>
                        <Separator className="bg-black" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}