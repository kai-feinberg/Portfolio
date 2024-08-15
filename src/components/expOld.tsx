import { LinkPreview } from "./ui/link-preview";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Mountain } from "lucide-react";
import { Separator } from "./ui/separator";

export default function exp() {
    return (
        <div className="max-w-[50%] mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>
                        <p>Experience</p>
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1">
                        <Separator className="bg-black" />

                        <Card className="flex items-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4">
                            <div className="rounded-md p-2 flex items-center justify-center">
                                <Mountain className="w-6 h-6 text-card-foreground" />
                            </div>
                            <div>
                                <CardTitle className="font-medium">
                                    <LinkPreview url="https://trailmix.cash/" className="text-xl font-semibold leading-none tracking-tight mb-2">
                                        TrailMix.cash
                                    </LinkPreview>                              
                                </CardTitle>
                                <CardDescription className="text-sm text-muted-foreground mt-1">Founder</CardDescription>
                                <CardContent>
                                    <p>TrailMix.cash is a decentralized social network built on Bitcoin Cash. It is a platform for creators to monetize their content and engage with their audience.</p>
                                </CardContent>
                            </div>
                        </Card>
                        <Separator className="bg-black" />


                        <Card className="flex items-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4 rounded-lg">
                            <div className="rounded-xl p-2 flex items-center justify-center">
                                <Mountain className="w-7 h-7 text-card-foreground" />
                            </div>
                            <div>
                                <CardTitle className="font-medium">
                                    <LinkPreview url="https://scoutprotocol.xyz/" className="text-xl font-semibold leading-none tracking-tight">
                                        JoinFire.xyz
                                    </LinkPreview>
                                </CardTitle>
                                <CardDescription className="text-sm text-muted-foreground pt-1">Product intern</CardDescription>
                                
                                <p className="pt-2">TrailMix.cash is a decentralized social network built on Bitcoin Cash. It is a platform for creators to monetize their content and engage with their audience.</p>
                                

                            </div>
                        </Card>

                        <Separator className="bg-black" />

                        <Card className="flex items-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4 rounded-lg">
                            <div className="rounded-md p-2 flex items-center justify-center">
                                <Mountain className="w-6 h-6 text-card-foreground" />
                            </div>
                            <div>
                                <CardTitle className="font-medium">
                                    <LinkPreview url="https://scoutprotocol.xyz/" className="text-xl font-semibold leading-none tracking-tight">
                                        Scout Protocol
                                    </LinkPreview>
                                </CardTitle>
                                <CardDescription className="text-sm text-muted-foreground">Founder</CardDescription>
                                <CardContent>
                                    <p>TrailMix.cash is a decentralized social network built on Bitcoin Cash. It is a platform for creators to monetize their content and engage with their audience.</p>
                                </CardContent>
                            </div>
                        </Card>
                        
                        <Separator className="bg-black" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}