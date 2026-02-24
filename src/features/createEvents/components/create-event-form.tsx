"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Check, Plus } from "lucide-react";

import { createInputSchema } from "@/features/createEvents/schemas";
import { useCreateEvents } from "@/features/createEvents/api/use-create-events";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";


function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  );
}

const DAYS = [
  { label: "MON", value: "Monday" },
  { label: "TUE", value: "Tuesday" },
  { label: "WED", value: "Wednesday" },
  { label: "THU", value: "Thursday" },
  { label: "FRI", value: "Friday" },
  { label: "SAT", value: "Saturday" },
  { label: "SUN", value: "Sunday" },
];

type ConditionFormValues = z.infer<typeof createInputSchema>;

export function CreateEventForm() {
  const router = useRouter();
  const { mutate, isLoading } = useCreateEvents();
  const workspaceId = useWorkspaceId();
  const form = useForm<ConditionFormValues>({
    resolver: zodResolver(createInputSchema),

    defaultValues: {
      howManyIncidents: "",
      incidentTitle: "",
      incidentType: "Medium",
      teamAlert: "",
      personAssigned: "",
      escalateIncident: "Enable",
      resolveIncident: "Enable",
      primaryKey: "",
      sqlQuery: "",
      alertCondition: "",
      days: "",
    },
  });

  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (value: string) => {
    setSelectedDays((current) =>
      current.includes(value)
        ? current.filter((day) => day !== value)
        : [...current, value]
    );
  };

  const onSubmit = (values: z.infer<typeof createInputSchema>) => {
    // console.log("Form submitted");
    // console.log("Form values before processing:", values);

    const finalValues = {
      ...values,
      howManyIncidents: values.howManyIncidents,
      incidentTitle: values.incidentTitle,
      incidentType: values.incidentType,
      teamAlert: values.teamAlert,
      personAssigned: values.personAssigned,
      escalateIncident: values.escalateIncident,
      resolveIncident: values.resolveIncident,
      primaryKey: values.primaryKey,
      sqlQuery: values.sqlQuery,
      alertCondition: values.alertCondition,
      days: selectedDays,
    };

    // console.log("Submitting values:", finalValues);

    mutate(
      { form: finalValues },
      {
        onSuccess: ({ data }) => {
          console.log("Data created successfully:", data);
          form.reset();
          router.push(`/workspaces/${workspaceId}/alerts`);
        },
        onError: (error) => {
          console.error("Error creating data:", error);
        },
      }
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="items-start justify-center gap-6 rounded-lg  grid lg:grid-cols-2">

            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1 ">
                  <CardTitle className="text-2xl flex">
                    Configure Your Alert Condition on top of your Query Result
                  </CardTitle>

                  <div className="border-b" />
                </CardHeader>

                <CardContent className="grid gap-4 ">
                  <FormField
                    control={form.control}
                    name="alertCondition"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          When should the alert be Triggered?
                        </FormLabel>
                        <Select {...field} onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="A New Row is Added" />
                            </SelectTrigger>
                          </FormControl>
                          <FormDescription>
                            Trigger an alert whenever
                          </FormDescription>
                          <SelectContent>
                            <SelectItem value="Row Added 1">
                              {" "}
                              Row Added 1
                            </SelectItem>
                            <SelectItem value="Row Added 2">
                              Row Added 2
                            </SelectItem>
                            <SelectItem value="Row Added 3">
                              Row Added 3
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="primaryKey"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Alert Condition</FormLabel>
                        <Select {...field} onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Column" />
                            </SelectTrigger>
                          </FormControl>
                          <FormDescription>
                            with primary key / unique value in column
                          </FormDescription>
                          <SelectContent>
                            <SelectItem value="Column 1">Column 1</SelectItem>
                            <SelectItem value="Column 2">Column 2</SelectItem>
                            <SelectItem value="Column 3">Column 3</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="sqlQuery"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>
                          How frequently do you want the SQL query to run?
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={
                              field.value ? field.value.toString() : ""
                            }
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="AtFixedInterval" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                At Fixed Intervals
                              </FormLabel>
                              <FormDescription>
                                Execute at a fixed interval of the time
                                repeatedly
                              </FormDescription>
                            </FormItem>
                            <Separator className="my-4" />
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="On Given Schedule" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                On Given Schedule
                              </FormLabel>
                              <FormDescription>
                                Execute at a given time of the day or days of
                                the week repeatedly
                              </FormDescription>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Separator className="my-4" />
                  <div className="flex flex-wrap gap-2">
                    {DAYS.map((day) => (
                      <button
                        key={day.value}
                        type="button"
                        onClick={() => toggleDay(day.value)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                          selectedDays.includes(day.value)
                            ? "bg-primary text-primary-foreground"
                            : "bg-background hover:bg-background/90 border border-gray-300"
                        }`}
                      >
                        {day.label}
                      </button>
                    ))}
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        at given time of the day (in selected timezone)
                      </p>
                      <Button type="button" variant="outline" className="gap-2">
                        <Plus className="w-4 h-4" />
                        Add Time
                      </Button>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="howManyIncidents"
                    render={({ field }) => (
                      <FormItem className="mt-2 pb-4 space-y-4">
                        <FormLabel>
                          How many incidents should be created when the alerts is triggered?
                        </FormLabel>
                        <FormDescription>
                          Notifications will only be sent once per incident
                        </FormDescription>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={
                              field.value ? field.value.toString() : ""
                            }
                            className="flex flex-col space-y-2"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="Individual Incident" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Individual Incident for each row being added
                              </FormLabel>
                              <FormDescription>
                                Ideal when number of rows being added is very
                                low
                              </FormDescription>
                            </FormItem>
                            <Separator className="my-4" />
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value=" One Incident" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                One Incident for all rows being added
                              </FormLabel>
                              <FormDescription>
                                Ideal when large number of rows added on each
                                run
                              </FormDescription>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </DemoContainer>
        
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">
                    Configure Incident Created from this Alert
                  </CardTitle>
                  <div className="border-b" />
                </CardHeader>
                <CardContent className="grid gap-4 ">
                  <FormField
                    control={form.control}
                    name="incidentTitle"
                    render={({ field }) => (
                      <FormItem>
                        <div>
                          <FormLabel>Incident Title</FormLabel>
                          <Select {...field} onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Add query result as templates" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Template 1">
                                Template 1
                              </SelectItem>
                              <SelectItem value="Template 2">
                                Template 2
                              </SelectItem>
                              <SelectItem value="Template 3">
                                Template 3
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="incidentType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Incident Type/Priority</FormLabel>

                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="High" />
                              </FormControl>
                              <FormLabel className="font-normal flex items-center">
                                <svg
                                  className={`fill-red-500 mr-2 h-2 w-2 `}
                                  viewBox="0 0 6 6"
                                  aria-hidden="true"
                                >
                                  <circle cx={3} cy={3} r={3} />
                                </svg>
                                High Priority
                              </FormLabel>
                              <FormDescription>
                                Needs to be solved as soon as possible
                              </FormDescription>
                            </FormItem>
                            <Separator className="my-4" />
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="Medium" />
                              </FormControl>
                              <FormLabel className="font-normal flex items-center">
                                <svg
                                  className={`fill-yellow-500 mr-2 h-2 w-2 `}
                                  viewBox="0 0 6 6"
                                  aria-hidden="true"
                                >
                                  <circle cx={3} cy={3} r={3} />
                                </svg>
                                Medium Priority
                              </FormLabel>
                              <FormDescription>
                                Requires immediate attention
                              </FormDescription>
                            </FormItem>
                            <Separator className="my-4" />
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="Low" />
                              </FormControl>
                              <FormLabel className="font-normal flex items-center">
                                <svg
                                  className={`fill-green-500 mr-2 h-2 w-2 `}
                                  viewBox="0 0 6 6"
                                  aria-hidden="true"
                                >
                                  <circle cx={3} cy={3} r={3} />
                                </svg>
                                Low Priority
                              </FormLabel>
                              <FormDescription>
                                Requires attention but not very important
                              </FormDescription>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="teamAlert"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                            Team is responsible for this alert (optional)
                        </FormLabel>
                        <Select {...field} onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a team" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Team 1">Team 1</SelectItem>
                            <SelectItem value="Team 2">Team 2</SelectItem>
                            <SelectItem value="Team 3">Team 3</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="personAssigned"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Person Assigned to the Incidents(optional)
                        </FormLabel>
                        <Select {...field} onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Team Member" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Person 1">John Doe</SelectItem>
                            <SelectItem value="Person 2">Jane Smith</SelectItem>
                            <SelectItem value="Person 3">
                              Alice Johnson
                            </SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="escalateIncident"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                            Enable escalating the incidents if not resolved
                        </FormLabel>
                        <Select {...field} onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue>
                                {field.value || "Enable"}
                              </SelectValue>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Enable">Enable</SelectItem>
                            <SelectItem value="Disable">Disable</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="resolveIncident"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Automatically Resolve the Incidents
                        </FormLabel>
                        <Select {...field} onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue>
                                {field.value || "Enable"}
                              </SelectValue>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Enable">Enable</SelectItem>
                            <SelectItem value="Disable">Disable</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Incidents will be resolved if the item is not present
                          in future SQL qurey results
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      at given time of the day (in selected timezone)
                    </p>
                    <Button type="button" variant="outline" className="gap-2">
                      <Plus className="w-4 h-4" />
                      Add Suggested Label
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </DemoContainer>
    
        </div>
        <div className="flex justify-end w-full">
          <Button disabled={isLoading} type="submit" size="lg">
            <Check className="w-5 h-5 mr-2" />
            Done
          </Button>
        </div>
      </form>
    </Form>
  );
}
