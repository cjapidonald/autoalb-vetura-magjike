
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { CarData } from "@/data/cars";

export const useCars = () => {
  return useQuery({
    queryKey: ["cars"],
    queryFn: async (): Promise<CarData[]> => {
      const { data, error } = await supabase
        .from("cars")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching cars:", error);
        throw error;
      }

      return data || [];
    },
  });
};
