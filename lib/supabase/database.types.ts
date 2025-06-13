export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string | null
          deleted: boolean | null
          id: string
          name: string
          parent_category_id: string | null
          updated_at: string | null
          user_id: string
          vat_rate: number
        }
        Insert: {
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          name: string
          parent_category_id?: string | null
          updated_at?: string | null
          user_id: string
          vat_rate?: number
        }
        Update: {
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          name?: string
          parent_category_id?: string | null
          updated_at?: string | null
          user_id?: string
          vat_rate?: number
        }
        Relationships: [
          {
            foreignKeyName: "categories_parent_category_id_fkey"
            columns: ["parent_category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_found: {
        Row: {
          closed_at_at: string | null
          created_at: string | null
          deleted: boolean | null
          id: string
          opened: boolean | null
          opened_at_at: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          closed_at_at?: string | null
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          opened?: boolean | null
          opened_at_at?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          closed_at_at?: string | null
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          opened?: boolean | null
          opened_at_at?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      establishments: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      features: {
        Row: {
          created_at: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      menus: {
        Row: {
          end_time: string | null
          establishments_id: string | null
          id: string
          name: string | null
          start_time: string | null
        }
        Insert: {
          end_time?: string | null
          establishments_id?: string | null
          id: string
          name?: string | null
          start_time?: string | null
        }
        Update: {
          end_time?: string | null
          establishments_id?: string | null
          id?: string
          name?: string | null
          start_time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "menus_establishments_id_fkey"
            columns: ["establishments_id"]
            isOneToOne: false
            referencedRelation: "establishments"
            referencedColumns: ["id"]
          },
        ]
      }
      menus_products: {
        Row: {
          id: string
          menus_id: string | null
          price: number | null
          products_id: string | null
        }
        Insert: {
          id: string
          menus_id?: string | null
          price?: number | null
          products_id?: string | null
        }
        Update: {
          id?: string
          menus_id?: string | null
          price?: number | null
          products_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "menus_products_menus_id_fkey"
            columns: ["menus_id"]
            isOneToOne: false
            referencedRelation: "menus"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "menus_products_products_id_fkey"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string | null
          created_at: string
          id: string
          updated_at: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          updated_at?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          created_at: string | null
          daily_found_id: string | null
          deleted: boolean | null
          description: string | null
          id: string
          opened: boolean | null
          tables_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          daily_found_id?: string | null
          deleted?: boolean | null
          description?: string | null
          id?: string
          opened?: boolean | null
          tables_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Update: {
          created_at?: string | null
          daily_found_id?: string | null
          deleted?: boolean | null
          description?: string | null
          id?: string
          opened?: boolean | null
          tables_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_daily_found_id_fkey"
            columns: ["daily_found_id"]
            isOneToOne: false
            referencedRelation: "daily_found"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_tables_id_fkey"
            columns: ["tables_id"]
            isOneToOne: false
            referencedRelation: "tables"
            referencedColumns: ["id"]
          },
        ]
      }
      orders_payments: {
        Row: {
          created_at: string | null
          deleted: boolean | null
          description: string | null
          id: string
          name: string
          orders_id: string | null
          paid: boolean | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          deleted?: boolean | null
          description?: string | null
          id?: string
          name: string
          orders_id?: string | null
          paid?: boolean | null
          updated_at?: string | null
          user_id?: string
        }
        Update: {
          created_at?: string | null
          deleted?: boolean | null
          description?: string | null
          id?: string
          name?: string
          orders_id?: string | null
          paid?: boolean | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_payments_order_id_fkey"
            columns: ["orders_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders_payments_rows: {
        Row: {
          amount: number | null
          created_at: string | null
          deleted: boolean | null
          id: string
          orders_payments_id: string | null
          payment_type: string | null
          updated_at: string | null
          user_id: string
          vat_rate: number | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          orders_payments_id?: string | null
          payment_type?: string | null
          updated_at?: string | null
          user_id?: string
          vat_rate?: number | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          orders_payments_id?: string | null
          payment_type?: string | null
          updated_at?: string | null
          user_id?: string
          vat_rate?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_payments_rows_orders_payments_id_fkey"
            columns: ["orders_payments_id"]
            isOneToOne: false
            referencedRelation: "orders_payments"
            referencedColumns: ["id"]
          },
        ]
      }
      orders_rows: {
        Row: {
          created_at: string | null
          deleted: boolean | null
          description: string | null
          id: string
          name: string
          orders_id: string | null
          price: number | null
          total: boolean | null
          updated_at: string | null
          user_id: string
          vat_rate: number | null
        }
        Insert: {
          created_at?: string | null
          deleted?: boolean | null
          description?: string | null
          id?: string
          name: string
          orders_id?: string | null
          price?: number | null
          total?: boolean | null
          updated_at?: string | null
          user_id?: string
          vat_rate?: number | null
        }
        Update: {
          created_at?: string | null
          deleted?: boolean | null
          description?: string | null
          id?: string
          name?: string
          orders_id?: string | null
          price?: number | null
          total?: boolean | null
          updated_at?: string | null
          user_id?: string
          vat_rate?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_rows_orders_id_fkey"
            columns: ["orders_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders_rows_parts: {
        Row: {
          amount: number | null
          created_at: string | null
          deleted: boolean | null
          description: string | null
          id: string
          name: string
          orders_payments_id: string | null
          orders_rows_id: string | null
          updated_at: string | null
          user_id: string
          vat_rate: number | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          deleted?: boolean | null
          description?: string | null
          id?: string
          name: string
          orders_payments_id?: string | null
          orders_rows_id?: string | null
          updated_at?: string | null
          user_id?: string
          vat_rate?: number | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          deleted?: boolean | null
          description?: string | null
          id?: string
          name?: string
          orders_payments_id?: string | null
          orders_rows_id?: string | null
          updated_at?: string | null
          user_id?: string
          vat_rate?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_rows_parts_orders_payments_fkey"
            columns: ["orders_payments_id"]
            isOneToOne: false
            referencedRelation: "orders_payments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_rows_parts_orders_rows_id_fkey"
            columns: ["orders_rows_id"]
            isOneToOne: false
            referencedRelation: "orders_rows"
            referencedColumns: ["id"]
          },
        ]
      }
      printers: {
        Row: {
          bdaddress: string | null
          created_at: string | null
          deleted: boolean | null
          devicename: string | null
          devicetype: string | null
          id: string
          ipaddress: string | null
          location: string | null
          macaddress: string | null
          target: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          bdaddress?: string | null
          created_at?: string | null
          deleted?: boolean | null
          devicename?: string | null
          devicetype?: string | null
          id?: string
          ipaddress?: string | null
          location?: string | null
          macaddress?: string | null
          target?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Update: {
          bdaddress?: string | null
          created_at?: string | null
          deleted?: boolean | null
          devicename?: string | null
          devicetype?: string | null
          id?: string
          ipaddress?: string | null
          location?: string | null
          macaddress?: string | null
          target?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          created_at: string | null
          deleted: boolean | null
          description: string | null
          id: string
          name: string
          price: number
          updated_at: string | null
          user_id: string
          vat_rate: number
        }
        Insert: {
          created_at?: string | null
          deleted?: boolean | null
          description?: string | null
          id?: string
          name: string
          price: number
          updated_at?: string | null
          user_id: string
          vat_rate?: number
        }
        Update: {
          created_at?: string | null
          deleted?: boolean | null
          description?: string | null
          id?: string
          name?: string
          price?: number
          updated_at?: string | null
          user_id?: string
          vat_rate?: number
        }
        Relationships: []
      }
      products_categories: {
        Row: {
          category_id: string
          created_at: string | null
          deleted: boolean | null
          id: string
          product_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          category_id: string
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          product_id: string
          updated_at?: string | null
          user_id?: string
        }
        Update: {
          category_id?: string
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          product_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_categories_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          user_id: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          user_id?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: []
      }
      rooms: {
        Row: {
          background_color: string | null
          created_at: string | null
          deleted: boolean | null
          id: string
          name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          background_color?: string | null
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          background_color?: string | null
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      tables: {
        Row: {
          color: string
          created_at: string | null
          deleted: boolean | null
          height: number
          id: string
          is_primary: boolean | null
          name: string
          room_id: string | null
          rotation: number
          seats: number | null
          shape: string
          tables_connections_id: string | null
          updated_at: string | null
          user_id: string
          width: number
          x: number
          y: number
        }
        Insert: {
          color?: string
          created_at?: string | null
          deleted?: boolean | null
          height?: number
          id?: string
          is_primary?: boolean | null
          name: string
          room_id?: string | null
          rotation?: number
          seats?: number | null
          shape?: string
          tables_connections_id?: string | null
          updated_at?: string | null
          user_id: string
          width?: number
          x?: number
          y?: number
        }
        Update: {
          color?: string
          created_at?: string | null
          deleted?: boolean | null
          height?: number
          id?: string
          is_primary?: boolean | null
          name?: string
          room_id?: string | null
          rotation?: number
          seats?: number | null
          shape?: string
          tables_connections_id?: string | null
          updated_at?: string | null
          user_id?: string
          width?: number
          x?: number
          y?: number
        }
        Relationships: [
          {
            foreignKeyName: "tables_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tables_tables_connections_id_fkey"
            columns: ["tables_connections_id"]
            isOneToOne: false
            referencedRelation: "tables_connections"
            referencedColumns: ["id"]
          },
        ]
      }
      tables_connections: {
        Row: {
          created_at: string | null
          deleted: boolean | null
          id: string
          name: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          name?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Update: {
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          name?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      todos: {
        Row: {
          counter: number
          created_at: string | null
          deleted: boolean | null
          done: boolean | null
          id: string
          text: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          counter?: number
          created_at?: string | null
          deleted?: boolean | null
          done?: boolean | null
          id?: string
          text?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          counter?: number
          created_at?: string | null
          deleted?: boolean | null
          done?: boolean | null
          id?: string
          text?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "todos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      todos1: {
        Row: {
          counter: number
          created_at: string | null
          deleted: boolean | null
          done: boolean | null
          id: string
          text: string | null
          todos_id: string | null
          updated_at: string | null
        }
        Insert: {
          counter?: number
          created_at?: string | null
          deleted?: boolean | null
          done?: boolean | null
          id?: string
          text?: string | null
          todos_id?: string | null
          updated_at?: string | null
        }
        Update: {
          counter?: number
          created_at?: string | null
          deleted?: boolean | null
          done?: boolean | null
          id?: string
          text?: string | null
          todos_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "todos1_todos_id_fkey"
            columns: ["todos_id"]
            isOneToOne: false
            referencedRelation: "todos"
            referencedColumns: ["id"]
          },
        ]
      }
      user_features: {
        Row: {
          created_at: string | null
          enabled: boolean
          feature_id: string | null
          id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          enabled?: boolean
          feature_id?: string | null
          id?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          enabled?: boolean
          feature_id?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          deleted: boolean | null
          establishment_id: string
          firstname: string
          id: string
          lastname: string
          password: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted?: boolean | null
          establishment_id: string
          firstname: string
          id?: string
          lastname: string
          password: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted?: boolean | null
          establishment_id?: string
          firstname?: string
          id?: string
          lastname?: string
          password?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_establishment_id_fkey"
            columns: ["establishment_id"]
            isOneToOne: false
            referencedRelation: "establishments"
            referencedColumns: ["id"]
          },
        ]
      }
      vat_rate: {
        Row: {
          created_at: string | null
          deleted: boolean | null
          id: string
          name: string | null
          updated_at: string | null
          user_id: string
          value: number | null
          vat_assoc_id: string | null
        }
        Insert: {
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          name?: string | null
          updated_at?: string | null
          user_id?: string
          value?: number | null
          vat_assoc_id?: string | null
        }
        Update: {
          created_at?: string | null
          deleted?: boolean | null
          id?: string
          name?: string | null
          updated_at?: string | null
          user_id?: string
          value?: number | null
          vat_assoc_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      TodosWithChildren: "todos" | "todos1"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      TodosWithChildren: ["todos", "todos1"],
    },
  },
} as const
