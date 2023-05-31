import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Props {
    user:
        | {
              email: string;
              name: string;
              image: string;
          }
        | undefined;
    setUser: (user: any) => void;
}

export const useUserStore = create(
    persist<Props>(
        (set) => ({
            user: undefined,
            setUser: (user) =>
                set(() => {
                    if (
                        user?.email === "panic@thedis.co" &&
                        user?.password === "secret"
                    ) {
                        return {
                            user: {
                                email: user.email,
                                name: "Panic",
                                image: "https://scontent.fsjo14-1.fna.fbcdn.net/v/t1.6435-9/121639290_188606542828822_4014156785875729105_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=ahnejfpudfUAX9fc0iV&_nc_ht=scontent.fsjo14-1.fna&oh=00_AfCOxFE_tEiwhbg7xQuwmzeKHf7x4yNG0oQIj6vVOKYjYg&oe=649DC4C8",
                            },
                        };
                    } else {
                        return {
                            user: undefined,
                        };
                    }
                }),
        }),
        { name: "user-store" }
    )
);
